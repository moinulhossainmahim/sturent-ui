import { IProperty } from "@/types/Properties";
import { apiSlice } from "../api";

const apiSliceWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Favorites']});

export const favoritesApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllFavorites: builder.query<IProperty[], void>({
      query: () => '/favorites',
      providesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),

    addToFavorite: builder.mutation({
      query: (favoriteId: number) => {
        return {
          url: `/favorites/${favoriteId}`,
          method: 'POST',
        }
      },
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),

    removeFromFavorite: builder.mutation({
      query: (favoriteId: number) => {
        return {
          url: `/favorites/${favoriteId}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    })
  })
})

export const {
  useGetAllFavoritesQuery,
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
} = favoritesApiSlice;
