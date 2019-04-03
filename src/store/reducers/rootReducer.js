import authReducer from './authReducer'
import employeeReducer from './employeeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer