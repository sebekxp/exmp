import { HeroState } from '../redux/slices/hero';
import { useAnimationLoop } from './useAnimationLoop';
import { useKeyDown } from './useKeyDown';
import { useMoveCharacter } from './useMoveCharacter';

/**
 * Custom hook for managing the game loop and character movement based on user input.
 * @param hero - The state of the hero character.
 * @param isGameStarted - Flag indicating whether the game has started.
 */
export const useGameLoop = (hero: HeroState, isGameStarted: boolean) => {
  const moveCharacter = useMoveCharacter(hero, isGameStarted);

  useKeyDown(moveCharacter);
  useAnimationLoop();
};
