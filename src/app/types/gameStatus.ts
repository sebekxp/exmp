/**
 * Object representing available game statuses.
 * @readonly
 * @enum {string}
 */
export const GAME_STATUS = {
  /**
   * Game has started.
   */
  STARTED: 'started',
  /**
   * Game has not started.
   */
  NOT_STARTED: 'not-started',
  /**
   * Game has been stopped.
   */
  STOPPED: 'stopped',
} as const;

/**
 * Type representing the game status.
 */
export type GameStatus = (typeof GAME_STATUS)[keyof typeof GAME_STATUS];
