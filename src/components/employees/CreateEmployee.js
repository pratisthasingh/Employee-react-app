import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEmployee } from '../../store/actions/employeeActions'
import { Redirect } from 'react-router-dom'
// import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';

class CreateEmployee extends Component {
  state = {
    first_name: '',
    second_name: '',
    email_id: '',
    employee_id: '',
    mobNumber: '',
    dob: '',
    address: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createEmployee(this.state);
    this.props.history.push('/');
  }
  
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new Employee</h5>

          <div className="input-field">
            <input type="text" id='first_name' onChange={this.handleChange} />
            <label htmlFor="First_name">First_name</label>
          </div>

          <div className="input-field">
            <input type="text" id="last_name" onChange={this.handleChange}></input>
            <label htmlFor="Last_name">Last_name</label>
          </div>

          <div className="input-field">
            <input type="text" id="email_id" onChange={this.handleChange}></input>
            <label htmlFor="email">email address</label>
          </div>

          <div className= "input-field">
            <input type="date" id="dob" onChange={this.handleChange}/>
          </div>

          <div className= "input-field">
            <label htmlfor="mobNumber">mobNumber</label>
            <input type="number" id="mobNumber" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <input type="text" id="employee_id" onChange={this.handleChange}></input>
            <label htmlFor="employee_id">employee_id</label>
          </div>

          <div className="input-field">
            <input type="text" id="address" onChange={this.handleChange}></input>
            <label htmlFor="address">address</label>
          </div>

          <div className="input-field">
            <Button type="submit" variant="contained" color="primary" style={{marginLeft: 500}}>Create</Button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createEmployee: (employee) => dispatch(createEmployee(employee))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee)
