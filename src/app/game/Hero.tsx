'use client';
import { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { HeroState } from '../redux/slices/hero';
import { RootState } from '../redux/store';
import CanvasContext from './canvasContext';
import { HERO_CLASSES_MAP, HERO_IMAGE_SIZE, MAP_DIMENSIONS } from './constans';

type HeroProps = HeroState & ReturnType<typeof mapStateToProps>;
function Hero({ x, y, id, url, loaded }: HeroProps) {
  const ctx = useContext(CanvasContext);

  useEffect(() => {
    if (!ctx) return;
    if (!loaded) return;

    const { sx, sy } = HERO_CLASSES_MAP['FLAME_SWORDSMAN'].icon;

    // const image = new window.Image() as HTMLImageElement;
    // image.src = url;

    ctx.drawImage(
      // @ts-ignore
      document.querySelector(`#${id}`),
      sx,
      sy,
      HERO_IMAGE_SIZE + MAP_DIMENSIONS.TILE_SIZE,
      HERO_IMAGE_SIZE + MAP_DIMENSIONS.TILE_SIZE,
      x * MAP_DIMENSIONS.TILE_SIZE,
      y * MAP_DIMENSIONS.TILE_SIZE,
      HERO_IMAGE_SIZE,
      HERO_IMAGE_SIZE,
    );
  }, [ctx, x, y, loaded, id]);

  return null;
}

const mapStateToProps = (state: RootState) => ({
  ...state.hero,
  ...state.assets.HeroAsset,
});

export default connect(mapStateToProps)(Hero);
