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

const areasSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    setAreas: (state, action: PayloadAction<AreaStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    }
  },
});

export const { setAreas } = areasSlice.actions;

export default areasSlice.reducer;
