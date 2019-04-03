import React from 'react'
import EmployeeSummary from './EmployeeSummary'
import { Link } from 'react-router-dom'

const EmployeeList = ({employees}) => {
  return (
    <div className="employee-list section">
      { employees && employees.map(employee => {
        return (
          <Link to={'/employee/' + employee.id} key={employee.id} 
            style={{
            display: 'inline-block',
            padding: '20px 16px 0 16px',
            textDecoration: 'none',
            color: '#36495a',
            textTransform: 'uppercase',
            fontSize: 12,
            fontWeight: 'bold',
            transition: '.2s',
            //the :hover below does not work
            ':hover': {
                color: 'green'
            }
        }} >
            <EmployeeSummary employee={employee} />
          </Link>
        )
      })}  
    </div>
  )
}

export default EmployeeList
