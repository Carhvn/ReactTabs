import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'
import { jsonPlaceholderApi } from '../services/jsonPlaceholderApi'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    jsonPlaceholderApi: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

