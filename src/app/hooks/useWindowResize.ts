import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}
/**
 * Hook that returns the current window size.
 * @returns Object containing the width and height of the window.
 */
export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window?.innerWidth ?? 0,
    height: window?.innerHeight ?? 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window?.innerWidth ?? 0,
        height: window?.innerHeight ?? 0,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
