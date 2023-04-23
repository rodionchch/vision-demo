import {createSlice} from '@reduxjs/toolkit';

interface AppState {
  rootScreen: boolean;
}

const initialState: AppState = {
  rootScreen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRootScreen: (state, {payload}) => {
      state.rootScreen = payload;
    },
  },
});

export const {setRootScreen} = appSlice.actions;

export default appSlice.reducer;
