import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { ModalStore } from './reducers/modal';

export interface ReduxStore {
  modal: ModalStore;
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
})

export default store;
