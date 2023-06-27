import { useEffect } from 'react';
import { HeroState } from '../redux/slices/hero';

/**
 * Custom hook responsible for clearing the canvas.
 * @param ctx - The 2D context of the canvas.
 * @param hero - The hero state object.
 */
export function useCanvasClear(ctx: CanvasRenderingContext2D | null, hero: HeroState) {
  useEffect(() => {
    const clearCanvas = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    clearCanvas();
    return () => {
      clearCanvas();
    };
  }, [ctx, hero]);
}
