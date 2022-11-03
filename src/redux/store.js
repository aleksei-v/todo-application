import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './todos'


export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(), todosApi.middleware
  ],
// middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
})
