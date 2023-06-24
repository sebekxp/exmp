import { RootState } from '../store';

export function areAllAssetsLoadedSelector(state: RootState) {
  return Array.from(Object.values(state.assets)).every((asset) => asset.loaded !== false);
}