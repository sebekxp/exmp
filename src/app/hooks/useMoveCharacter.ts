import { useCallback } from 'react';
import { isMapCollision } from '../utils/collision';
import { Directions, MOVE_DIRECTIONS } from '../game/constants';
import { HeroState, move, updateCurrentDirection } from '../redux/slices/hero';
import { useAppDispatch } from './redux';
import { useDynamicGameDimensions } from './useDynamicGameDimensions';
import { startGame } from '../redux/slices/gameStatus';

/**
 * Custom hook for handling character movement based on user input.
 * @param hero - The state of the hero character.
 * @param status - Flag indicating whether the game has started, is ongoing, or has ended.
 * @returns Callback function for moving the character.
 */
export function useMoveCharacter(hero: HeroState, status: 'started' | 'not-started' | 'stoped') {
  const dispatch = useAppDispatch();
  const { rows, columns } = useDynamicGameDimensions();

  const moveCharacter = useCallback(
    (event: KeyboardEvent) => {
      if (status === 'stoped') return;
      const key = event.key;
      if (isMoveDirectionType(key)) {
        const [x, y] = MOVE_DIRECTIONS[key];
        if (!isMapCollision(hero.x + x, hero.y + y, rows, columns)) {
          dispatch(move([x, y]));
          dispatch(updateCurrentDirection(key));
          if (status === 'not-started') {
            dispatch(startGame());
          }
        }
      }
    },
    [dispatch, hero.x, hero.y],
  );

  return moveCharacter;
}

/**
 * Checks if the given direction is a valid move direction.
 * @param direction - The direction to check.
 * @returns Indicates whether the direction is a valid move direction.
 */
function isMoveDirectionType(direction: string): direction is Directions {
  return ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(
    direction,
  );
}
