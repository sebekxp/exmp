/**
 * Represents possible user movements.
 * @property {'w'} - Move up.
 * @property {'a'} - Move left.
 * @property {'s'} - Move down.
 * @property {'d'} - Move right.
 * @property {'ArrowUp'} - Move up (arrow key).
 * @property {'ArrowDown'} - Move down (arrow key).
 * @property {'ArrowLeft'} - Move left (arrow key).
 * @property {'ArrowRight'} - Move right (arrow key).
 */
export type Directions =
  | 'w'
  | 'a'
  | 's'
  | 'd'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight';

type MoveDirections = { [key in Directions]: number[] };

/**
 * Represents the movement directions and their corresponding coordinate updates.
 * @property w - Move up. Updates the character's coordinates by [0, -1].
 * @property a - Move left. Updates the character's coordinates by [-1, 0].
 * @property s - Move down. Updates the character's coordinates by [0, 1].
 * @property d - Move right. Updates the character's coordinates by [1, 0].
 * @property ArrowUp - Move up (arrow key). Updates the character's coordinates by [0, -1].
 * @property ArrowDown - Move down (arrow key). Updates the character's coordinates by [0, 1].
 * @property ArrowLeft - Move left (arrow key). Updates the character's coordinates by [-1, 0].
 * @property ArrowRight - Move right (arrow key). Updates the character's coordinates by [1, 0].
 */
export const MOVE_DIRECTIONS: MoveDirections = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
  ArrowUp: [0, -1],
  ArrowLeft: [-1, 0],
  ArrowDown: [0, 1],
  ArrowRight: [1, 0],
};

type HeroSprites = { [key in Directions]: { sx: number; sy: number; w: number; h: number } };

/**
 * Represents the sprite images for different movement directions of the hero character.
 * Each movement has four different images that are swapped in real-time to achieve a smooth walking effect.
 * @property s - Sprite image for moving down.
 * @property s.sx - X-coordinate of the sprite image in the sprite sheet.
 * @property s.sy - Y-coordinate of the sprite image in the sprite sheet.
 * @property s.w - Width of the sprite image.
 * @property s.h - Height of the sprite image.
 * @property ArrowDown - Sprite image for moving down (arrow key). Same properties as 's'.
 * @property a - Sprite image for moving left.
 * @property ArrowLeft - Sprite image for moving left (arrow key). Same properties as 'a'.
 * @property d - Sprite image for moving right.
 * @property ArrowRight - Sprite image for moving right (arrow key). Same properties as 'd'.
 * @property w - Sprite image for moving up.
 * @property ArrowUp - Sprite image for moving up (arrow key). Same properties as 'w'.
 */
export const HERO_SPRITES: HeroSprites[] = [
  {
    s: { sx: 20, sy: 55, w: 25, h: 40 },
    ArrowDown: { sx: 20, sy: 55, w: 25, h: 40 },

    a: { sx: 17, sy: 145, w: 28, h: 45 },
    ArrowLeft: { sx: 17, sy: 145, w: 28, h: 45 },

    d: { sx: 22, sy: 240, w: 26, h: 44 },
    ArrowRight: { sx: 22, sy: 240, w: 26, h: 44 },

    w: { sx: 21, sy: 340, w: 22, h: 40 },
    ArrowUp: { sx: 21, sy: 340, w: 22, h: 40 },
  },
  {
    s: { sx: 85, sy: 55, w: 25, h: 40 },
    ArrowDown: { sx: 85, sy: 55, w: 25, h: 40 },

    a: { sx: 83, sy: 145, w: 28, h: 45 },
    ArrowLeft: { sx: 83, sy: 145, w: 28, h: 45 },

    d: { sx: 81, sy: 240, w: 26, h: 44 },
    ArrowRight: { sx: 81, sy: 240, w: 26, h: 44 },

    w: { sx: 84, sy: 340, w: 22, h: 40 },
    ArrowUp: { sx: 84, sy: 340, w: 22, h: 40 },
  },
  {
    s: { sx: 150, sy: 55, w: 25, h: 40 },
    ArrowDown: { sx: 150, sy: 55, w: 25, h: 40 },

    a: { sx: 145, sy: 145, w: 28, h: 45 },
    ArrowLeft: { sx: 145, sy: 145, w: 28, h: 45 },

    d: { sx: 146, sy: 240, w: 26, h: 44 },
    ArrowRight: { sx: 146, sy: 240, w: 26, h: 44 },

    w: { sx: 150, sy: 340, w: 22, h: 40 },
    ArrowUp: { sx: 150, sy: 340, w: 22, h: 40 },
  },
  {
    s: { sx: 213, sy: 55, w: 25, h: 40 },
    ArrowDown: { sx: 213, sy: 55, w: 25, h: 40 },

    a: { sx: 211, sy: 145, w: 28, h: 45 },
    ArrowLeft: { sx: 211, sy: 145, w: 28, h: 45 },

    d: { sx: 209, sy: 240, w: 26, h: 44 },
    ArrowRight: { sx: 209, sy: 240, w: 26, h: 44 },

    w: { sx: 213, sy: 340, w: 22, h: 40 },
    ArrowUp: { sx: 213, sy: 340, w: 22, h: 40 },
  },
];

export const NUMBER_OF_SPRITES = HERO_SPRITES.length;
export const REVEAL_CIRCLE_RADIUS = 150;
export const REVEAL_CIRCLE_DIAMETER = REVEAL_CIRCLE_RADIUS * 2;
