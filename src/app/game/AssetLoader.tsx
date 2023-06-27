'use client';
import { connect } from 'react-redux';
import { areAllAssetsLoadedSelector } from '../redux/selectors/assetsSelectors';
import { RootState } from '../redux/store';
import { HeroAsset } from './HeroAsset';
import { MapAsset } from './MapAssset';

type AssetLoaderProps = { children?: React.ReactNode } & ReturnType<typeof mapStateToProps>;

/**
 * AssetLoader component.
 * This component serves as a place where assets are preloaded and then added to Redux,
 * so that their references are stored in one place.
 * Only when all assets are loaded, the children that depend on them will be rendered.
 *
 * @param children - The children components.
 * @param areAssetsLoaded - Flag indicating whether assets are loaded.
 * @returns The rendered component.
 */
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
