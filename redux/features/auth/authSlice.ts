import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IUser {
  name: string;
  email: string;
  img: string;
}

export interface AuthStore {
  user: IUser;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
};

const initialState: Partial<AuthStore> = {
  user: undefined,
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setCredentials: (state, action: PayloadAction<AuthStore>) => {
          const { user, accessToken, refreshToken } = action.payload
          state.user = user;
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.isAuthenticated = true;
      },
      logOut: (state) => {
          state.user = undefined;
          state.accessToken = '';
          state.refreshToken = '';
          state.isAuthenticated = false;
      }
    },
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
