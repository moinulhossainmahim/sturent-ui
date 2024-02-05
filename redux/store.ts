import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { ModalStore } from './reducers/modal';
import { setupListeners } from '@reduxjs/toolkit/query';
import { listingsApi } from './services/listings';

export interface ReduxStore {
  modal: ModalStore;
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    [listingsApi.reducerPath]: listingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([listingsApi.middleware]),
})

setupListeners(store.dispatch);

export default store;
