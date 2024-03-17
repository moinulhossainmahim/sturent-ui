import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { ModalStore } from './features/modals/modalSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer, { AuthStore } from './features/auth/authSlice';
import { apiSlice } from './features/api';
import propertyReducer, { PropertyStore } from './features/properties/propertiesSlice';
import userPropertyReducer, { UserPropertiesStore } from './features/properties/userPropertiesSlice';
import favoriteReducer, { FavoriteStore } from './features/favorites/favoritesSlice';
import singlePropertyReducer, { SinglePropertyStore } from './features/properties/singlePropetySlice';

export interface ReduxStore {
  modal: ModalStore;
  auth: AuthStore;
  properties: PropertyStore;
  userProperties: UserPropertiesStore;
  favorites: FavoriteStore;
  singlePropertyStore: SinglePropertyStore;
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    properties: propertyReducer,
    userProperties: userPropertyReducer,
    favorites: favoriteReducer,
    singlePropertyReducer: singlePropertyReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware]),
  devTools: true,
})

setupListeners(store.dispatch);

export default store;
