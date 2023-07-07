import { useCallback, useEffect } from 'react';

/**
 * Hook that creates an animation loop using requestAnimationFrame.
 */
export function useAnimationLoop() {
  /**
   * Callback function for the animation loop.
   */
  const loop = useCallback(() => {
    requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    // Start the animation loop by requesting the first animation frame
    const animationFrame = requestAnimationFrame(loop);

    // Cleanup function to cancel the animation frame when the component unmounts or the dependencies change
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [loop]);
}
