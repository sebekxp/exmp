import { RootState } from '../store';

export function selectCordinates(state: RootState) {
  return [state.hero.x, state.hero.y];
}

