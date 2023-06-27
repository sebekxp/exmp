import { Directions } from '@/app/game/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type HeroState = {
  x: number;
  y: number;
  directions: {
    [key in Directions]: number;
  };
  currentDirection: Directions;
};

const initialState: HeroState = {
  x: 11,
  y: 11,
  directions: {
    w: 0,
    a: 0,
    s: 0,
    d: 0,
    ArrowUp: 0,
    ArrowLeft: 0,
    ArrowDown: 0,
    ArrowRight: 0,
  },
  currentDirection: 'd',
};

const heroSlice = createSlice({
  name: 'Hero',
  initialState,
  reducers: {
    move(state, action: PayloadAction<[number, number]>) {
      const [x, y] = action.payload;
      return {
        ...state,
        x: state.x + x,
        y: state.y + y,
      };
    },
    updateCurrentDirection(state, action: PayloadAction<Directions>) {
      return {
        ...state,
        currentDirection: action.payload,
        directions: {
          ...state.directions,
          [action.payload]: state.directions[action.payload] + 1,
        },
      };
    },
  },
});

export const { move, updateCurrentDirection } = heroSlice.actions;
export default heroSlice.reducer;
