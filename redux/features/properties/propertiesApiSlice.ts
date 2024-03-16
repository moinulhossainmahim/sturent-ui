import { IProperty } from "@/types/Properties";
import { apiSlice } from "../api";

const apiSliceWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Properties', 'UserProperties']});

export const propertiesApiSlice = apiSliceWithTag.injectEndpoints({
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
      invalidatesTags: [{ type: 'Properties', id: 'LIST' }, { type: 'UserProperties', id: 'LIST' }],
    }),

    getUserAllProperties: builder.query<IProperty[], void>({
      query: () => '/properties',
      providesTags: [{ type: 'UserProperties', id: 'LIST' }],
    }),

    removeUserProperty: builder.mutation({
      query: (propertyId: number) => {
        return {
          url: `/properties/${propertyId}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: [{ type: 'UserProperties', id: 'LIST' }, { type: 'Properties', id: 'LIST' }],
    })
  })
})

export const {
  useGetAllPropertiesQuery,
  useCreatePropertyMutation,
  useGetUserAllPropertiesQuery,
  useRemoveUserPropertyMutation
} = propertiesApiSlice;
