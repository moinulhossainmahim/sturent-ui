import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { ModalStore } from './features/modals/modalSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer, { AuthStore } from './features/auth/authSlice';
import { apiSlice } from './features/api';

export interface ReduxStore {
  modal: ModalStore;
  auth: AuthStore,
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware]),
  devTools: true,
})

setupListeners(store.dispatch);

export default store;
