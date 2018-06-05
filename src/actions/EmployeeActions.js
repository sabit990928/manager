import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import
{ EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_USER_SUCCESS }
  from './types';

const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value },
});

const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // console.log(name, phone, shift);
  return (dispatch) => {
    firebase.database().ref(`/user/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        console.log('Created');
        Actions.pop();
        console.log('Popped');
      // Actions.employeeList({ type: 'reset' });
      })
      .catch(err => console.log('Error: ', err));
  };
};

export { employeeUpdate, employeeCreate };

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  // console.log('asdasdsadsa', currentUser.uid);

  return (dispatch) => {
    console.log('Fetch start');
    firebase.database().ref(`/user/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        console.log('Employees fetched');
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      }, (error) => {
        console.log(error);
      });
  };
};

export const employeeSave = ({
  name, phone, shift, uid,
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/user/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_USER_SUCCESS });
        // Actions.employeeList({ type: 'reset' });
        Actions.pop();
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/user/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};

// const employeeUpdate = text => ({
//   type: EMPLOYEE_UPDATE,
//   payload: text,
// });
