'use client';
import { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDynamicGameDimensions } from '../hooks/useDynamicGameDimensions';
import { HeroState } from '../redux/slices/hero';
import { RootState } from '../redux/store';
import CanvasContext from './canvasContext';
import { HERO_SPRITES, NUMBER_OF_SPRITES } from './constants';

type HeroProps = HeroState & ReturnType<typeof mapStateToProps>;

/**
 * Component responsible for drawing the character on the canvas based on the loaded character asset.
 * @component
 * @param props - The component props.
 * @param props.x - The x-coordinate of the character.
 * @param props.y - The y-coordinate of the character.
 * @param props.id - The ID of the character asset.
 * @param props.loaded - Indicates whether the character asset is loaded or not.
 * @param props.currentDirection - The current direction of the character.
 * @param props.directions - The available directions for the character.
 */
function Hero({ x, y, id, loaded, currentDirection, directions }: HeroProps) {
  const ctx = useContext(CanvasContext);
  const { tileSize } = useDynamicGameDimensions();

  useEffect(() => {
    if (!ctx) return;
    if (!loaded) return;

    const dx = x * tileSize;
    const dy = y * tileSize;
    const img = document.querySelector(`#${id}`) as CanvasImageSource;
    const spriteIndex = directions[currentDirection] % NUMBER_OF_SPRITES;
    const { sx, sy, w, h } = HERO_SPRITES[spriteIndex][currentDirection];

    ctx.drawImage(img, sx, sy, w, h, dx, dy, w, h);
  }, [ctx, x, y, loaded, id, currentDirection, tileSize, directions]);

  return null;
}

const mapStateToProps = (state: RootState) => ({
  ...state.hero,
  ...state.assets.HeroAsset,
  ...state.gameStatus,
});

export default connect(mapStateToProps)(Hero);
