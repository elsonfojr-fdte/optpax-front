import { combineReducers } from 'redux';
import statusListSlice from '../slices/statusListSlice';
import missionTableSlice from '../slices/missionTableSlice';

export const Reducers = combineReducers({ statusListSlice, missionTableSlice });
