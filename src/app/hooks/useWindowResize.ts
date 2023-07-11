import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}
/**
 * Hook that returns the current window size.
 * @returns Object containing the width and height of the window.
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window?.innerWidth ?? 0,
    height: window?.innerHeight ?? 0,
  });
  const handleSize = () => {
    setWindowSize({
      width: window?.innerWidth ?? 0,
      height: window?.innerHeight ?? 0,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};
