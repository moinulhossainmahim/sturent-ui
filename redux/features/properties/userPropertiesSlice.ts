import { IProperty } from "@/types/Properties";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserPropertiesStore {
  data: IProperty[];
  success: boolean;
  message: string;
}

const initialState: UserPropertiesStore = {
  data: [],
  success: false,
  message: '',
}

export const userProperties = createSlice({
  name: 'userProperties',
  initialState,
  reducers: {
    fetchUserProperties: (state, action: PayloadAction<UserPropertiesStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  }
})

export const { fetchUserProperties } = userProperties.actions;

export default userProperties.reducer;
