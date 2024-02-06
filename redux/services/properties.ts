import { API_BASE_URL } from "@/constants";
import { IListing } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApi = createApi({
  reducerPath: 'properties',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Properties'],
  endpoints: (builder) => ({
    getProperties: builder.query<IListing[], void>({
      query: () => '/pokemon',
      providesTags: [{ type: 'Properties', id: 'LIST' }],
    }),

    addToProperties: builder.mutation<IListing, IListing>({
      query: (listing: IListing) => {
        return {
          url: '/properties',
          method: 'POST',
          body: listing,
        }
      },
      invalidatesTags: [{ type: 'Properties', id: 'LIST' }],
    })
  })
});

export const { useGetPropertiesQuery, useAddToPropertiesMutation } = propertiesApi;
