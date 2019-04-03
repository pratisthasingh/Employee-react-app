const initState = {}

const employeeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_EMPLOYEE_SUCCESS':
      console.log('create employee success');
      return state;
    case 'CREATE_EMPLOYEE_ERROR':
      console.log('create employee error');
      return state;
    default:
      return state;
  }
};

export default employeeReducer;