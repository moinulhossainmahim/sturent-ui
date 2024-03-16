import { IProperty } from "@/types/Properties";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPropertyStore {
  data: IProperty[];
  success: boolean;
  message: string;
};

const initialState: IPropertyStore = {
  data: [],
  success: false,
  message: '',
}

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    fetchAllProperties: (state, action: PayloadAction<IPropertyStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    }
  },
});

export const { fetchAllProperties } = propertiesSlice.actions;

export default propertiesSlice.reducer;
