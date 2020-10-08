import { createSlice } from '@reduxjs/toolkit';

const statusListSlice = createSlice({
  name: 'statusList',
  initialState: {
    value: {
      deltas: [],
    },
  },
  reducers: {
    loadStatus(state, action) {
      state.value = action.payload;
    },
  },
});

export const { loadStatus } = statusListSlice.actions;

export default statusListSlice.reducer;
