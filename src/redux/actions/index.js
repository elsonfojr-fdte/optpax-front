import { loadStatus } from '../slices/statusListSlice';

export const loadDeltas = () => (dispatch) => {
  return fetch('http://localhost:3001/deltas')
    .then((response) => response.json())
    .then(
      ({ deltas }) => dispatch(loadStatus({ deltas })),
      (err) => console.log('err', err)
    );
};
