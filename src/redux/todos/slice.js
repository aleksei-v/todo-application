 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-task-manager.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => `/tasks`,
      providesTags: ['Todo']
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/tasks/${todoId}`,
        method: 'DELETE',  
      }),
      invalidatesTags: ['Todo']
    }),
    createTodo: builder.mutation({
      query: todoContent => ({
        url: '/tasks',
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