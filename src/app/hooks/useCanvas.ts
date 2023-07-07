import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for managing a canvas element and its 2D rendering context.
 * @returns An array containing a ref to the canvas element and the 2D rendering context.
 */
export function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      setCtx(context);
    }
  }, []);

  return [canvasRef, ctx] as const;
}
