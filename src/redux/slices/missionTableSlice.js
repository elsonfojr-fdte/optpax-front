import { createSlice } from '@reduxjs/toolkit';

const missionTableSlice = createSlice({
  name: 'missionTable',
  initialState: [],
  reducers: {
    load(_, { payload }) {
      return [...payload];
    },
  },
});

export const { load } = missionTableSlice.actions;

export default missionTableSlice.reducer;
