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
};

const initialState: Partial<AuthStore> = {
  user: undefined,
  accessToken: '',
  refreshToken: '',
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
        },
        logOut: (state) => {
            state.user = undefined;
            state.accessToken = '';
            state.refreshToken = '';
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
