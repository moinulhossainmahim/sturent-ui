import { IProperty } from "@/types/Properties";
import { apiSlice } from "../api";
import { IFilterAndPagination } from "@/types/filterAndPagination";

const apiSliceWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Properties', 'UserProperties']});

export const propertiesApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query<IProperty[], Partial<IFilterAndPagination>>({
      query: ({ page, gender, university, area }: Partial<IFilterAndPagination>) => ({
        url: `/properties/all?${page ? `page=${page}` : `page=1`}${gender ? `&gender=${gender}` : ''}${university ? `&university=${university}` : ''}${area ? `&area=${area}` : ''}`
      }),
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
    }),

    getSingleProperty: builder.query({
      query: (propertyId: number) => `/properties/${propertyId}`,
    })
  })
})

export const {
  useGetAllPropertiesQuery,
  useGetSinglePropertyQuery,
  useGetUserAllPropertiesQuery,
  useCreatePropertyMutation,
  useRemoveUserPropertyMutation,
} = propertiesApiSlice;
