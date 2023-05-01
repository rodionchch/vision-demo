import {createSlice} from '@reduxjs/toolkit';

interface AppState {
  dashboard: 'chat' | 'call' | 'mail' | 'sms';
}

const initialState: AppState = {
  dashboard: 'sms',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDashboard: (state, {payload}) => {
      state.dashboard = payload;
    },
  },
});

export const {setDashboard} = appSlice.actions;

export default appSlice.reducer;
