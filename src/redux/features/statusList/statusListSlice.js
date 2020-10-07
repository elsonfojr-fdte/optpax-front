import { createSlice } from '@reduxjs/toolkit';

const statusListSlice = createSlice({
  name: 'statusList',
  initialState: {
    value: {
      delta: [],
    },
  },
  reducers: {
    loadStatus(state, action) {
      state.value = action.data;
    },
  },
});

export const { loadStatus } = statusListSlice.actions;

export default statusListSlice;
