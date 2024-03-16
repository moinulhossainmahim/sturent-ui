import { API_BASE_URL } from "@/constants";
import { ICreatePropertyFormData, IProperty } from "@/types/Properties";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApiSlice = createApi({
  reducerPath: 'properties',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Properties'],
  endpoints: (builder) => ({
    getAllProperties: builder.query<IProperty[], void>({
      query: () => '/properties/all',
      providesTags: [{ type: 'Properties', id: 'LIST' }],
    }),

    createProperty: builder.mutation({
      query: (property: FormData) => {
        return {
          url: '/properties',
          method: 'POST',
          body: property,
          headers: {
            'Contenty-Type': 'multipart/form-data',
          },
        }
      },
      invalidatesTags: [{ type: 'Properties', id: 'LIST' }],
    })
  })
});

export const { useGetAllPropertiesQuery, useCreatePropertyMutation } = propertiesApiSlice;
