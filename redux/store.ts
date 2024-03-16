import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { ModalStore } from './features/modals/modalSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer, { AuthStore } from './features/auth/authSlice';
import { authApiSlice } from './features/auth/authApiSlice';
import { listingsApi } from './features/listings';
import { propertiesApiSlice } from './features/properties/propertiesApiSlice';

export interface ReduxStore {
  modal: ModalStore;
  auth: AuthStore,
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    [propertiesApiSlice.reducerPath]: propertiesApiSlice.reducer,
    [listingsApi.reducerPath]: listingsApi.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [
        authApiSlice.middleware,
        propertiesApiSlice.middleware,
        listingsApi.middleware,
      ]
    ),
  devTools: true,
})

setupListeners(store.dispatch);

export default store;
