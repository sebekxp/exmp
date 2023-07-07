import { useEffect } from 'react';
import { isMoveDirectionType } from '../utils/isMoveDirectionType';

/**
 * Hook that adds a key down event listener to the document and calls the callback function when a key is down.
 * @param callback - The callback function to be called when a key is down.
 */
export function useKeyDown(callback: (e: KeyboardEvent) => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMoveDirectionType(e.key)) {
        callback(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}
