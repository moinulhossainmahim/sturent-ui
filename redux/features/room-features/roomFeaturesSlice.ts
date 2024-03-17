import { IFeature } from "@/types/Feature";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RoomFeatureStore {
  data: IFeature[];
  success: boolean;
  message: string;
};

const initialState: RoomFeatureStore = {
  data: [],
  success: false,
  message: '',
}

const roomFeaturesSlice = createSlice({
  name: 'roomFeatures',
  initialState,
  reducers: {
    setRoomFeatures: (state, action: PayloadAction<RoomFeatureStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    }
  },
});

export const { setRoomFeatures } = roomFeaturesSlice.actions;

export default roomFeaturesSlice.reducer;
