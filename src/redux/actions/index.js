import { LOAD_DATA_SUCCESS } from './actionsTypes';

export const loadDeltas = () => (dispatch) => {
  return fetch('http://localhost:3001/deltas')
    .then((response) => response.json())
    .then(
      (data) => {
        dispatch({ type: LOAD_DATA_SUCCESS, data });
      },
      (err) => console.log('err', err)
    );
};
