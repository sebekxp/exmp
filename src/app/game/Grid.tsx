'use client';
import { useContext, useEffect } from 'react';
import CanvasContext from './canvasContext';
import { MAP_DIMENSIONS } from './constans';

interface GridProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

function Grid({ width, height, children }: GridProps) {
  const ctx = useContext(CanvasContext);
//   const { width, height } = useWindowSize();

  useEffect(() => {
    if (!ctx) return;

    for (let i = 0; i < height; i++) {
      const y = i * MAP_DIMENSIONS.TILE_SIZE;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    for (let j = 0; j < width; j++) {
      const x = j * MAP_DIMENSIONS.TILE_SIZE;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
  }, [ctx, height, width]);

  return children;
}

export default Grid;
