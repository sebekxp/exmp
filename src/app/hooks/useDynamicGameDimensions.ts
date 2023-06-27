import { useMemo } from 'react';
import { useWindowSize } from './useWindowResize';

/**
 * Custom hook for calculating dynamic game dimensions based on the window size.
 * @returns An object containing the calculated dimensions and tile information.
 * - width: The width of the window.
 * - height: The height of the window.
 * - tileSize: The calculated size of each tile based on the minimum of width and height divided by 100.
 * - rows: The calculated number of rows based on the width divided by the tileSize.
 * - columns: The calculated number of columns based on the height divided by the tileSize.
 * - allTiles: The calculated total number of tiles based on the rows and columns.
 */
export function useDynamicGameDimensions() {
  const { width, height } = useWindowSize();
  const tileSize = useMemo(() => Math.min(width, height) / 100, [width, height]);
  const rows = useMemo(() => Math.floor(width / tileSize), [width, tileSize]) - 1;
  const columns = useMemo(() => Math.floor(height / tileSize), [height, tileSize]) - 1;
  const allTiles = useMemo(() => rows * columns, [rows, columns]);

  return {
    width,
    height,
    tileSize,
    rows,
    columns,
    allTiles,
  };
}
