import { IProperty } from "@/types/Properties";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FavoriteStore {
  data: IProperty[];
  success: boolean;
  message: string;
};

const initialState: FavoriteStore = {
  data: [],
  success: false,
  message: '',
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    fetchAllFavorites: (state, action: PayloadAction<FavoriteStore>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
    }
  },
});

export const { fetchAllFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
