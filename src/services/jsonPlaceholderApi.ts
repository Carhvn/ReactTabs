import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User, Post, Comment } from "../Types/api";

export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/users"
        }),

        getPosts: builder.query<Post[], void>({
            query: () => "/posts"
        }),

        getComments: builder.query<Comment[], void>({
            query: () => "/comments"
        }),

        getPostComments: builder.query<Comment[], number>({
            query: (postId) => `/comments?postId=${postId}`
        })
    })
})

export const {
    useGetUsersQuery,
    useGetPostsQuery,
    useGetCommentsQuery,
    useGetPostCommentsQuery,
} = jsonPlaceholderApi;