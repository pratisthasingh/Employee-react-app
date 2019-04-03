import React from 'react'
import moment from 'moment'

const EmployeeSummary = ({employee}) => {
  return (    
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "> employee name - {employee.first_name}</span>
        <p> employee id - {employee.employee_id}</p>
        <p>added by- {employee.authorFirstName} {employee.authorLastName}</p>
        <p className="grey-text">{moment(employee.createdAt.toDate()).calendar()}</p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      </div>
      </div>
  )
}

export default EmployeeSummary;
