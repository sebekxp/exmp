import { MAP_DIMENSIONS } from './constans';

function isMapEdge(x: number, y: number) {
  const { ROWS, COLS } = MAP_DIMENSIONS;
  return x < 0 || x >= COLS || y < 0 || y >= ROWS;
}

export function isMapCollision(x: number, y: number) {
  return isMapEdge(x, y);
}
