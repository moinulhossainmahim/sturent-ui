import { API_BASE_URL } from "@/constants";
import { IListing } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listingsApi = createApi({
  reducerPath: 'listings',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Listings'],
  endpoints: (builder) => ({
    getListings: builder.query<IListing[], void>({
      query: () => '/pokemon',
      providesTags: [{ type: 'Listings', id: 'LIST' }],
    }),

    createListing: builder.mutation<IListing, IListing>({
      query: (listing: IListing) => {
        return {
          url: '/listings',
          method: 'POST',
          body: listing,
        }
      },
      invalidatesTags: [{ type: 'Listings', id: 'LIST' }],
    })
  })
});

export const { useGetListingsQuery } = listingsApi;
