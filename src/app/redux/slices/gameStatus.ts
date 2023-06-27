import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GameStatusState {
  mapExploredProgress: number;
  isGameStarted: boolean;
}

const initialState: GameStatusState = {
  mapExploredProgress: 10,
  isGameStarted: false,
};

const gameStatusSlice = createSlice({
  name: 'GameStatus',
  initialState,
  reducers: {
    updateProgress(state, action: PayloadAction<number>) {
      return {
        ...state,
        mapExploredProgress: action.payload,
      };
    },
    startGame(state) {
      console.log('startGame');
      return {
        ...state,
        isGameStarted: true,
      };
    },
    stopGame(state) {
      return {
        ...state,
        isGameStarted: false,
      };
    },
  },
});

export const { updateProgress, startGame, stopGame } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;
