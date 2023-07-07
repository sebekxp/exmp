import { GAME_STATUS, GameStatus } from '@/app/types/gameStatus';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GameStatusState {
  mapExploredProgress: number;
  status: GameStatus;
}

const initialState: GameStatusState = {
  mapExploredProgress: 0,
  status: GAME_STATUS.NOT_STARTED,
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
          status: GAME_STATUS.STOPPED,
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
        status: GAME_STATUS.STARTED,
      };
    },
    stopGame(state) {
      return {
        ...state,
        status: GAME_STATUS.STOPPED,
      };
    },
  },
});

export const { updateGameStatus, startGame, stopGame } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;
