import { IUniversity } from "@/types/University";
import { apiSlice } from "../api";

const apiSliceWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['University']});

export const universityApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllUniversity: builder.query<IUniversity[], void>({
      query: () => '/universities',
      providesTags: [{ type: 'University', id: 'LIST' }],
    })
  })
});

export const { useGetAllUniversityQuery } = universityApiSlice;
