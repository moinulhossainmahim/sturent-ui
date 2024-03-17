import { Area } from "@/types/Area";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AreaStore {
  data: Area[];
  success: boolean;
  message: string;
};

const initialState: AreaStore = {
  data: [],
  success: false,
  message: '',
}

const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setAreas: (state, action: PayloadAction<AreaStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    }
  },
});

export const { setAreas } = areaSlice.actions;

export default areaSlice.reducer;
