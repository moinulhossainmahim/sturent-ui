import { IUniversity } from "@/types/University";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UniversityStore {
  data: IUniversity[];
  success: boolean;
  message: string;
};

const initialState: UniversityStore = {
  data: [],
  success: false,
  message: '',
}

const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    setUniversities: (state, action: PayloadAction<UniversityStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    }
  },
});

export const { setUniversities } = universitiesSlice.actions;

export default universitiesSlice.reducer;
