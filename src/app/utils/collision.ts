/**
 * Checks if the given coordinates are at the edge of the map.
 *
 * @param x - The x-coordinate.
 * @param y - The y-coordinate.
 * @param rows - The number of rows in the map.
 * @param columns - The number of columns in the map.
 * @returns Returns true if the coordinates are at the edge of the map, false otherwise.
 *
 * @description
 * The function checks whether the given coordinates (x, y) are at the edge of the map.
 * The function assumes the use of a frame or border around the map, so it applies some
 * margin. This margin is applied to ensure proper visual alignment and avoid cutting
 * off rows and columns due to the frame.
 */
function isMapEdge(x: number, y: number, rows: number, columns: number) {
  return x < 2 || x >= rows - 3 || y < 2 || y >= columns - 5;
}

/**
 * Checks if there is a collision at the given coordinates on the map.
 * @param x - The x-coordinate.
 * @param y - The y-coordinate.
 * @param rows - The number of rows in the map.
 * @param columns - The number of columns in the map.
 * @returns Returns true if there is a collision at the coordinates, false otherwise.
 */
export function isMapCollision(x: number, y: number, rows: number, columns: number) {
  return isMapEdge(x, y, rows, columns);
}
