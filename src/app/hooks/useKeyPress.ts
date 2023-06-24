import { useEffect } from 'react';

/**
 * Hook that adds a key press event listener to the document and calls the callback function when a key is pressed.
 * @param callback - The callback function to be called when a key is pressed.
 */
export function useKeyPress(callback: (e: KeyboardEvent) => void) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      callback(e);
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [callback]);
}
