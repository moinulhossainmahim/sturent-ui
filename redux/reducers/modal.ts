import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ModalKey {
  SearchModal = 'SearchModal',
}

interface IModalAction {
  key: ModalKey,
  value: boolean,
}

export type ModalStore = Record<ModalKey, boolean>;

const initialState: ModalStore = {
  [ModalKey.SearchModal]: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<IModalAction>) => {
      const { key, value } = action.payload;
      state[key] = value;
    }
  }
})

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
