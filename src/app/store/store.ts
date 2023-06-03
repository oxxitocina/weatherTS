import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from '../features/navbar/navbarSlice'
import citiesSlice from '../features/cities/citiesSlice'

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    cities: citiesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
