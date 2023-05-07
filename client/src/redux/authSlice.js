import { createSlice } from '@reduxjs/toolkit';

const userAuth = createSlice({
  name: 'user',
  initialState: {
    userToken: '',
  },
  reducers: {
    userAddDetails(state, actions) {
      const newItem = actions.payload;
      state.userToken = newItem;
    },
    userLogout(state) {
      state.userToken = '';
    },
  },
});

export const {userAddDetails,userLogout} = userAuth.actions;

export default userAuth;
