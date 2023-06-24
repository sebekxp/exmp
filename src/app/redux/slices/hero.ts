import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface HeroState {
  x: number;
  y: number;
}

const initialState: HeroState = {
  x: 6,
  y: 6,
};

const heroSlice = createSlice({
  name: 'Hero',
  initialState,
  reducers: {
    move(state, action: PayloadAction<[number, number]>) {
      console.log('move action: ', action.payload);
      const [x, y] = action.payload;
      state.x += x;
      state.y += y;
    },
  },
});

export const { move } = heroSlice.actions;
export default heroSlice.reducer;
