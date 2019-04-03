import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
// import {Button} from 'reactstrap'
import {getFirestore } from 'redux-firestore';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const EmployeeDetails = (props) => {
  console.log(props);
  const firestore = getFirestore();
 const { employee, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (employee) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{employee.first_name} {employee.last_name}</span>
            <p><b>employee id</b>- {employee.employee_id}</p>
            <p><b>email id</b>- {employee.email_id}</p>
            <p><b>contact number</b>- {employee.mobNumber}</p>
            <p><b>date of birth</b>- {employee.dob}</p>
            <p><b>adress</b>- {employee.address}</p>
          </div>

          <div>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>added by {employee.authorFirstName} {employee.authorLastName}</div>
            <div>{moment(employee.createdAt.toDate()).calendar()} </div>
          <br /><Button variant="contained" disabled={auth.uid !== employee.authorId}  color="secondary" style={{flex: 1,
                                                                flexDirection: 'column',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',}} onClick={() =>
                                                            firestore.collection("employees").doc(props.match.params.id).delete().then(function() {
                                                            props.history.push('/')
                                                            console.log("Document successfully deleted!");
                                                            console.log(props.match.params.id)
                                                            window.location.reload();
                                                                }).catch(function(error) {
                                                            console.error("Error removing document: ", error)
                                                                  })}>
                Delete Employee
                <DeleteIcon className={props.rightIcon} />
        </Button>
        </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading employee...</p>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const employees = state.firestore.data.employees;
  const employee = employees ? employees[id] : null
  return {
    employee: employee,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'employees'
  }])
)(EmployeeDetails)
