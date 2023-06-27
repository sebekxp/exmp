import { RootState } from '../store';

/**
 * Checks whether all assets are loaded.
 *
 * @param state - The root state object.
 * @returns Returns true if all assets are loaded, otherwise returns false.
 */
export function areAllAssetsLoadedSelector(state: RootState) {
  return Array.from(Object.values(state.assets)).every((asset) => asset.loaded !== false);
}
