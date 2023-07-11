import { useMemo } from 'react';
import { useWindowSize } from './useWindowResize';

/**
 * Custom hook for calculating dynamic game dimensions based on the window size.
 * @returns An object containing the calculated dimensions and tile information.
 * @property width - The width of the window.
 * @property height - The height of the window.
 * @property tileSize - The calculated size of each tile based on the minimum of width and height divided by 100.
 * @property rows - The calculated number of rows based on the width divided by the tileSize.
 * @property columns - The calculated number of columns based on the height divided by the tileSize.
 * @property allTiles - The calculated total number of tiles based on the rows and columns.
 */
export function useDynamicGameDimensions() {
  const { width, height } = useWindowSize();
  const tileSize = useMemo(() => {
    const calculatedSize = Math.min(width, height) / 100;
    return calculatedSize > 0 ? calculatedSize : 1;
  }, [width, height]);

  const rows = useMemo(() => {
    const calculatedRows = Math.floor(width / tileSize) - 1;
    return calculatedRows > 0 ? calculatedRows : 1;
  }, [width, tileSize]);

  const columns = useMemo(() => {
    const calculatedColumns = Math.floor(height / tileSize) - 1;
    return calculatedColumns > 0 ? calculatedColumns : 1;
  }, [height, tileSize]);

  const allTiles = useMemo(() => {
    const calculatedAllTiles = rows * columns;
    return calculatedAllTiles > 0 ? calculatedAllTiles : 1;
  }, [rows, columns]);

  return {
    width,
    height,
    tileSize,
    rows,
    columns,
    allTiles,
  };
}
