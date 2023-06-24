export const WIDTH = 3170;
export const HEIGHT = 1720;

export const ROWS = WIDTH / 25;
export const COLS = HEIGHT / 25;

const TILE_SIZE_BY_COLS = WIDTH / COLS;
const TILE_SIZE_BY_ROWS = WIDTH / ROWS;

export const MAP_DIMENSIONS = {
  COLS,
  ROWS,
  TILE_SIZE: TILE_SIZE_BY_ROWS,
};

export const HEROES_SPRITE = 'assets/heroes/heroes.png';

export const HERO_IMAGE_SIZE = MAP_DIMENSIONS.TILE_SIZE;

export const HERO_CLASSES_MAP = {
  FLAME_SWORDSMAN: {
    icon: { sx: 0, sy: 0 },
    portrait: { sx: 0, sy: 240 },
    className: 'Flame swordsman',
  },
};

export const MOVE_DIRECTIONS: { [key: string]: number[] } = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};
