'use client';
import { areAllAssetsLoadedSelector } from '../redux/selectors/assetsSelectors';
import { RootState } from '../redux/store';
import { HeroAsset } from './HeroAsset';
import { MapAsset } from './MapAssset';
import { connect } from 'react-redux';

type AssetLoaderProps = { children?: React.ReactNode } & ReturnType<typeof mapStateToProps>;

function AssetLoader({ children, areAssetsLoaded }: AssetLoaderProps) {
  return (
    <>
      <MapAsset />
      <HeroAsset />
      {areAssetsLoaded && children}
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  areAssetsLoaded: areAllAssetsLoadedSelector(state),
});

export default connect(mapStateToProps)(AssetLoader);
