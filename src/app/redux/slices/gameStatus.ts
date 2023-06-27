import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GameStatusState {
  mapExploredProgress: number;
  status: 'started' | 'not-started' | 'stoped';
}

const initialState: GameStatusState = {
  mapExploredProgress: 0,
  status: 'not-started',
};

const gameStatusSlice = createSlice({
  name: 'GameStatus',
  initialState,
  reducers: {
    updateGameStatus(state, action: PayloadAction<number>) {
      if (state.mapExploredProgress === 1) {
        return {
          ...state,
          mapExploredProgress: action.payload,
          status: 'stoped',
        };
      }

      return {
        ...state,
        mapExploredProgress: action.payload,
      };
    },
    startGame(state) {
      return {
        ...state,
        status: 'started',
      };
    },
    stopGame(state) {
      return {
        ...state,
        status: 'stoped',
      };
    },
  },
});

export const { updateGameStatus, startGame, stopGame } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;
