import { useEffect, useRef, useState } from 'react';

export function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        setCtx(context);
      }
    }
  }, []);

  return [canvasRef, ctx] as const;
}
