import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ModalKey {
  SearchModal = 'SearchModal',
  LoginModal = 'LoginModal',
  RegisterModal = 'RegisterModal',
  CreatePropertyModal = 'CreatePropertyModal',
  ListingFeaturesModal = 'ListingFeaturesModal',
  UpdateGeneralInfoModal = 'UpdateGeneralInfoModal',
  AddressModal = 'AddressModal',
  StudentIDModal = 'StudentIDModal',
  GovtIDModal = 'GovtIDModal',
  UpdateProfileImageModal = 'UpdateProfileImageModal',
}

interface IModalAction {
  key: ModalKey,
  value: boolean,
}

export type ModalStore = Record<ModalKey, boolean>;

const initialState: ModalStore = {
  [ModalKey.SearchModal]: false,
  [ModalKey.LoginModal]: false,
  [ModalKey.RegisterModal]: false,
  [ModalKey.CreatePropertyModal]: false,
  [ModalKey.ListingFeaturesModal]: false,
  [ModalKey.UpdateGeneralInfoModal]: false,
  [ModalKey.AddressModal]: false,
  [ModalKey.StudentIDModal]: false,
  [ModalKey.GovtIDModal]: false,
  [ModalKey.UpdateProfileImageModal]: false,
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
