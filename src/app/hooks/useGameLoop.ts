import { HeroState } from '../redux/slices/hero';
import { useAnimationLoop } from './useAnimationLoop';
import { useKeyDown } from './useKeyDown';
import { useMoveCharacter } from './useMoveCharacter';

/**
 * Custom hook for managing the game loop and character movement based on user input.
 * @param hero - The state of the hero character.
 * @param status - Flag indicating whether the game has started, is ongoing, or has ended.
 */
export const useGameLoop = (hero: HeroState, status: 'started' | 'not-started' | 'stoped') => {
  const moveCharacter = useMoveCharacter(hero, status);
  useKeyDown(moveCharacter);
  useAnimationLoop();
};
