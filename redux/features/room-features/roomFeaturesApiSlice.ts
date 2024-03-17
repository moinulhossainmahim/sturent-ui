import { IFeature } from "@/types/Feature";
import { apiSlice } from "../api";

const apiSliceWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Features']});

export const propertiesApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeatures: builder.query<IFeature[], void>({
      query: () => '/features',
      providesTags: [{ type: 'Features', id: 'LIST' }],
    })
  })
});

export const { useGetAllFeaturesQuery } = propertiesApiSlice;
