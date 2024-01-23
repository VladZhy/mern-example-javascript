import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../../../services/LocalStorageService';

const initialState = {
  userInfo: LocalStorageService.getValue('userInfo'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      LocalStorageService.setItem('userInfo', action.payload);
    },
    logOut: (state) => {
      state.userInfo = null;
      LocalStorageService.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
