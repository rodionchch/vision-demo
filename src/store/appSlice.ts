import {createSlice} from '@reduxjs/toolkit';

interface AppState {
  hello: string;
}

const initialState: AppState = {
  hello: '',
};

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sayHello: state => {
      state.hello = 'Hello, World!';
    },
  },
});

export const {sayHello} = appSlice.actions;

export default appSlice.reducer;
