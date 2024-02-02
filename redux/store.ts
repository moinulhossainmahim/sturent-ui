import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { ModalStore } from './reducers/modal';
import { pokemonApi } from './services/pokemon';
import { setupListeners } from '@reduxjs/toolkit/query';

export interface ReduxStore {
  modal: ModalStore;
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch);

export default store;
