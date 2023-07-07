import { Directions, MOVE_DIRECTIONS_LIST } from '../game/constants';

/**
 * Checks if the given direction is a valid move direction.
 * @param direction - The direction to check.
 * @returns Indicates whether the direction is a valid move direction.
 */
export function isMoveDirectionType(direction: string): direction is Directions {
  return MOVE_DIRECTIONS_LIST.includes(direction as Directions);
}
