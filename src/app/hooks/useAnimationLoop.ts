import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';

/**
 * Hook that creates an animation loop using requestAnimationFrame and calls the callback functions on each frame.
 * @param isUpdateRequired - Determines whether an update is required for the animation loop.
 * @param setIsUpdateRequired - Callback function to set the update requirement.
 * @param setIsVisible - Callback function to set the visibility state.
 */
export function useAnimationLoop(
  isUpdateRequired: boolean,
  setIsUpdateRequired: Dispatch<SetStateAction<boolean>>,
  setIsVisible: Dispatch<SetStateAction<boolean>>,
) {
  const loopRef = useRef<number | null>(null);
  const shouldStopRef = useRef(false);

  const loop = useCallback(() => {
    if (!isUpdateRequired) return;
    setIsVisible(true);
    setIsUpdateRequired(false);
    loopRef.current = requestAnimationFrame(loop);
  }, [isUpdateRequired, setIsVisible, setIsUpdateRequired]);

  useEffect(() => {
    loopRef.current = requestAnimationFrame(loop);
    return () => {
      shouldStopRef.current = true;
      if (loopRef.current) {
        cancelAnimationFrame(loopRef.current);
      }
    };
  }, [loop]);
}
