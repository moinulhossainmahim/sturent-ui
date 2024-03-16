import { IProperty } from "@/types/Properties";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUserPropertiesStore {
  data: IProperty[];
  success: boolean;
  message: string;
}

const initialState: IUserPropertiesStore = {
  data: [],
  success: false,
  message: '',
}

export const userProperties = createSlice({
  name: 'userProperties',
  initialState,
  reducers: {
    fetchUserProperties: (state, action: PayloadAction<IUserPropertiesStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  }
})

export const { fetchUserProperties } = userProperties.actions;

export default userProperties.reducer;
