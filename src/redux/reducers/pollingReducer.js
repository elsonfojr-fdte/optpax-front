import { LOAD_DATA_SUCCESS } from '../actions/actionsTypes';

const initialState = {
  value: {
    deltas: [],
  },
};

export default function pollingReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS: {
      return {
        ...state,
        value: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
