import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './slices/hero';
import assetsReducer from './slices/assets';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    assets: assetsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
