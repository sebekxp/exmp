import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AssetsKeyType = 'HeroAsset' | 'MapAsset';

export interface PayloadType {
  key: AssetsKeyType;
  url: string;
  id: string;
}
export type Asset = Required<Omit<PayloadType, 'key'>> & { loaded: boolean };
export type AssetsState = {
  [key in AssetsKeyType]: Asset;
};

const NOT_LOADED = 'not-loaded';
const initialState: AssetsState = {
  HeroAsset: {
    url: NOT_LOADED,
    id: NOT_LOADED,
    loaded: false,
  },
  MapAsset: {
    url: NOT_LOADED,
    id: NOT_LOADED,
    loaded: false,
  },
};

const assetsSlice = createSlice({
  name: 'Assets',
  initialState,
  reducers: {
    loadAsset(state, action: PayloadAction<PayloadType>) {
      console.log('asset loaded: ', action.payload);
      state[action.payload.key] = {
        url: action.payload.url,
        id: action.payload.id,
        loaded: true,
      };
    },
  },
});

export const { loadAsset } = assetsSlice.actions;
export default assetsSlice.reducer;
