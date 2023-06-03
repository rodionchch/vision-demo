import {createSlice} from '@reduxjs/toolkit';

interface AppState {
  auth: boolean;
}

const initialState: AppState = {
  auth: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAuth: (state, {payload}) => {
      state.auth = payload;
    },
  },
});

export const {setAuth} = appSlice.actions;

export default appSlice.reducer;
