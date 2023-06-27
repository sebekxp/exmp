'use client';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { connect } from 'react-redux';
import { useAppDispatch } from '../hooks/redux';
import { useDynamicGameDimensions } from '../hooks/useDynamicGameDimensions';
import { updateProgress } from '../redux/slices/gameStatus';
import { RootState } from '../redux/store';
import { generateRandomStars, revealVisibleTiles } from '../utils/canvasUtils';
import { generateMatrix, updateMatrix } from '../utils/matrix';
import CanvasContext from './canvasContext';
import { REVEAL_CIRCLE_RADIUS } from './constants';

interface GridProps {
  children: React.ReactNode;
}

type GridPropsType = GridProps & ReturnType<typeof mapStateToProps>;

/**
 * Component responsible for rendering the overlay on the canvas, rendering stars,
 * revealing visited areas, and updating the game state and progress.
 * @component
 * @param props - The component props.
 * @param props.children - The child components to be rendered.
 * @param props.x - The x-coordinate of the character.
 * @param props.y - The y-coordinate of the character.
 * @param props.isGameStarted - Indicates whether the game has started or not.
 */
function Grid({ children, x, y, isGameStarted }: GridPropsType) {
  const dispatch = useAppDispatch();
  const ctx = useContext(CanvasContext);
  const secondOverlayRef = useRef<HTMLCanvasElement | null>(null);
  const { tileSize, rows, columns, allTiles } = useDynamicGameDimensions();
  const radius = useMemo(() => REVEAL_CIRCLE_RADIUS / tileSize, [tileSize]);
  let matrix = useMemo(() => generateMatrix(rows, columns), [rows, columns]);

  /**
   * Clear the canvas and render random stars
   */
  useEffect(() => {
    if (!ctx) return;
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(20, 20, ctx.canvas.width - 40, ctx.canvas.height - 40);
    generateRandomStars(ctx);
  }, [ctx, x, y]);

  /**
   * Update the matrix based on character position and game state
   */
  useEffect(() => {
    matrix = updateMatrix(matrix, x, y, rows, columns, radius);
  }, [x, y, isGameStarted]);

  /**
   * Update the game progress based on visited tiles
   */
  useEffect(() => {
    const visitedTiles = matrix.flat().filter((value) => value === 1).length;
    const progress = visitedTiles / allTiles;
    dispatch(updateProgress(progress));
  }, [x, y, matrix, dispatch]);

  /**
   * Reveal visible tiles on the canvas
   */
  useEffect(() => {
    revealVisibleTiles(ctx, matrix, tileSize);
  }, [ctx, x, y, tileSize, matrix, isGameStarted]);

  return (
    <>
      <canvas className="absolute top-0 left-0 w-full h-full" ref={secondOverlayRef} />
      {children}
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  ...state.hero,
  ...state.gameStatus,
});

export default connect(mapStateToProps)(Grid);
