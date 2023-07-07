import { useCallback } from 'react';
import { MOVE_DIRECTIONS } from '../game/constants';
import { startGame } from '../redux/slices/gameStatus';
import { HeroState, move, updateCurrentDirection } from '../redux/slices/hero';
import { GAME_STATUS, GameStatus } from '../types/gameStatus';
import { isMapCollision } from '../utils/collision';
import { isMoveDirectionType } from '../utils/isMoveDirectionType';
import { useAppDispatch } from './redux';
import { useDynamicGameDimensions } from './useDynamicGameDimensions';

/**
 * Custom hook for handling character movement based on user input.
 * @param hero - The state of the hero character.
 * @param status - Flag indicating whether the game has started, is ongoing, or has ended.
 * @returns Callback function for moving the character.
 */
export function useMoveCharacter(hero: HeroState, status: GameStatus) {
  const dispatch = useAppDispatch();
  const { rows, columns } = useDynamicGameDimensions();

  const moveCharacter = useCallback(
    (event: KeyboardEvent) => {
      if (status === GAME_STATUS.STOPPED) return;

      const key = event.key;
      if (!isMoveDirectionType(key)) return;

      const [x, y] = MOVE_DIRECTIONS[key];
      if (isMapCollision(hero.x + x, hero.y + y, rows, columns)) return;

      dispatch(move([x, y]));
      dispatch(updateCurrentDirection(key));

      if (status === GAME_STATUS.NOT_STARTED) {
        dispatch(startGame());
      }
    },
    [columns, dispatch, hero.x, hero.y, rows, status],
  );

  return moveCharacter;
}
