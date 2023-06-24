import { Dispatch, SetStateAction, useCallback } from 'react';
import { isMapCollision } from '../game/collision';
import { MOVE_DIRECTIONS } from '../game/constans';
import { HeroState, move } from '../redux/slices/hero';
import { useAppDispatch } from './redux';

/**
 * Hook that handles character movement based on key presses.
 * @param hero - The current hero state.
 * @param setIsUpdateRequired - Callback function to set the update requirement.
 * @returns The moveCharacter function to be used as a key press event handler.
 */
export function useMoveCharacter(
  hero: HeroState,
  setIsUpdateRequired: Dispatch<SetStateAction<boolean>>,
) {
  const dispatch = useAppDispatch();

  /**
   * Handles character movement based on key presses.
   * @param event - The key press event.
   */
  const moveCharacter = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      if (MOVE_DIRECTIONS[key]) {
        const [x, y] = MOVE_DIRECTIONS[key];
        if (!isMapCollision(hero.x + x, hero.y + y)) {
          setIsUpdateRequired(true);
          dispatch(move([x, y]));
        }
      }
    },
    [dispatch, hero.x, hero.y],
  );

  return moveCharacter;
}
