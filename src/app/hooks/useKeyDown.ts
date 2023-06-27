import { useEffect } from 'react';

/**
 * Hook that adds a key down event listener to the document and calls the callback function when a key is down.
 * @param callback - The callback function to be called when a key is down.
 */
export function useKeyDown(callback: (e: KeyboardEvent) => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
        case 'a':
        case 's':
        case 'd':
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          callback(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}
