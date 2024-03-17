import { apiSlice } from "../api";
import { Area } from "@/types/Area";

const apiSliceWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Areas']});

export const areaApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeatures: builder.query<Area[], void>({
      query: () => '/areas',
      providesTags: [{ type: 'Areas', id: 'LIST' }],
    })
  })
});

export const { useGetAllFeaturesQuery } = areaApiSlice;
