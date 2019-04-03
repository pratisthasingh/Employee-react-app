import React, { Component } from 'react'
import EmployeeList from '../employees/EmployeeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
  // componentDidMount() {
  //   // window.location.reload();
  //   this.r = false;
  //   console.log("cdm",this.r);
  // }
  render() {
    // const r = true;
    // console.log("after",r);
    // if (r) return window.location.reload();
    const { employees, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    // if (auth.id) return <Redirect to= '/' />
    return (
      <div className="dashboard container" >
        <div className="row">
          <div className="col s4 m12">
            <EmployeeList employees={employees} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    employees: state.firestore.ordered.employees,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'employees', orderBy: ['createdAt', 'desc']},
  ])
)(Dashboard)
