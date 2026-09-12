import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../../Types/api";

export interface FavoritesState {
    posts: Post[]
}

export const initialState: FavoritesState = {
    posts: []
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        postAdded:
            (state, action: PayloadAction<Post>) => {
                const isFavorite = state.posts.some((post) => post.id === action.payload.id)
                if (!isFavorite) {
                    state.posts.push(action.payload)
                }
            },

        postDeleted: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter(
                (post) => post.id !== action.payload
            )
        }

    }


})
export const { postAdded, postDeleted } = favoritesSlice.actions
export default favoritesSlice.reducer
