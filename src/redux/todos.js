 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63624da27521369cd06a0950.mockapi.io/api/v1' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => `/todos`,
      providesTags: ['Todo']
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/todos/${todoId}`,
        method: 'DELETE',  
      }),
      invalidatesTags: ['Todo']
    }),
    createTodo: builder.mutation({
      query: todoContent => ({
        url: '/todos',
        method: 'POST',
        body: {
          text: todoContent,
        },
      }),
      invalidatesTags: ['Todo'],
    })
  }),
})

export const { useGetTodoQuery, useDeleteTodoMutation, useCreateTodoMutation } = todosApi;