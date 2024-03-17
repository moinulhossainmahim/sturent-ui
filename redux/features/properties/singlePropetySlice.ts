import { IProperty } from "@/types/Properties";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SinglePropertyStore {
  data: IProperty | null;
  success: boolean;
  message: string;
}

const initialState: SinglePropertyStore = {
  data: null,
  success: false,
  message: '',
}

export const singlePropertySlice = createSlice({
  name: 'singleProperty',
  initialState,
  reducers: {
    fetchSingleProperty: (state, action: PayloadAction<SinglePropertyStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  }
})

export const { fetchSingleProperty } = singlePropertySlice.actions;

export default singlePropertySlice.reducer;
