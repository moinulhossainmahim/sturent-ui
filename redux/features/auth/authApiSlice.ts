import { apiSlice } from "../api";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      login: builder.mutation({
        query: credentials => ({
            url: '/auth/local/signin',
            method: 'POST',
            body: { ...credentials }
        })
      }),

      googleLogin: builder.mutation({
        query: (code: string) => ({
          url: '/auth/google/signin',
          method: 'POST',
          body: { code },
        }),
      }),

      logout: builder.mutation({
        query: () => ({
            url: '/auth/logout',
            method: 'POST',
        })
      }),
  }),
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useGoogleLoginMutation
} = authApiSlice;
