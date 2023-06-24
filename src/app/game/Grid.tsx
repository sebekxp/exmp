'use client';
import { useContext, useEffect } from 'react';
import CanvasContext from './canvasContext';
import { MAP_DIMENSIONS } from './constans';

interface GridProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

/**
 * Component that draws a grid on a canvas based on a previously loaded asset.
 * The grid's dimensions are determined by the provided width and height props.
 *
 * @component
 * @param width - The width of the grid.
 * @param height - The height of the grid.
 * @param children - The child components to be rendered within the grid.
 */
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
