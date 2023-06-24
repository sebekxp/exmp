import { useState } from 'react';
import { HeroState } from '../redux/slices/hero';
import { useAnimationLoop } from './useAnimationLoop';
import { useKeyPress } from './useKeyPress';
import { useMoveCharacter } from './useMoveCharacter';

/**
 * Hook that sets up the game loop and handles game logic.
 * @param hero - The current hero state.
 * @returns An object containing the isVisible state.
 */
export const useGameLoop = (hero: HeroState) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);

  const moveCharacter = useMoveCharacter(hero, setIsUpdateRequired);

  useKeyPress(moveCharacter);
  useAnimationLoop(isUpdateRequired, setIsUpdateRequired, setIsVisible);

  return { isVisible };
};
