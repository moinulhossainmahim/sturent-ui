import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut, AuthStore } from '../../features/auth/authSlice'
import { API_BASE_URL } from '@/constants'

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
        const token = getState().auth.accessToken
        if (!headers.has('Authorization') && token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 403) {
        const refreshToken = api.getState().auth.refreshToken;

        const refreshResult = await baseQuery({ method: 'POST', url: '/auth/refresh', headers: {
            "Authorization": `Bearer ${refreshToken}`,
        }, }, api, extraOptions)

        const data = refreshResult.data as AuthStore;
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            api.dispatch(setCredentials({ accessToken: data.accessToken, refreshToken: data.refreshToken, user, isAuthenticated: true }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
});
