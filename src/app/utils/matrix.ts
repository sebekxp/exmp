/**
 * Updates the matrix with the visited cells based on the given coordinates and radius.
 * @param matrix - The matrix representing the game grid.
 * @param x - The x-coordinate of the current position.
 * @param y - The y-coordinate of the current position.
 * @param rows - The number of rows in the matrix.
 * @param columns - The number of columns in the matrix.
 * @param radius - The radius for revealing the cells.
 * @returns The updated matrix with the visited cells marked.
 */
export function updateMatrix(
  matrix: number[][],
  x: number,
  y: number,
  rows: number,
  columns: number,
  radius: number,
) {
  const updatedMatrix = [...matrix];

  updatedMatrix[x][y] = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const dx = row - x;
      const dy = col - y;
      const distanceSquared = dx ** 2 + dy ** 2;
      if (distanceSquared <= radius ** 2) {
        updatedMatrix[row][col] = 1;
      }
    }
  }

  return updatedMatrix;
}

export function generateMatrix(rows: number, columns: number) {
  return Array.from({ length: rows }, () => Array(columns).fill(0));
}
