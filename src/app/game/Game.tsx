'use client';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAppDispatch } from '../hooks/redux';
import { useCanvas } from '../hooks/useCanvas';
import { useCanvasClear } from '../hooks/useCanvasClear';
import { useGameLoop } from '../hooks/useGameLoop';
import { useWindowSize } from '../hooks/useWindowResize';
import { stopGame } from '../redux/slices/gameStatus';
import { RootState } from '../redux/store';
import CanvasContext from './canvasContext';

type GameProps = { children?: React.ReactNode } & ReturnType<typeof mapStateToProps>;

function Game({ children, hero, status }: GameProps) {
  const [canvasRef, ctx] = useCanvas();
  const { width, height } = useWindowSize();

  useCanvasClear(ctx, hero);
  useGameLoop(hero, status);

  return (
    <CanvasContext.Provider value={ctx}>
      <canvas ref={canvasRef} width={width} height={height} className="fixed z-10" />
      {children}
    </CanvasContext.Provider>
  );
}

const mapStateToProps = (state: RootState) => ({ hero: state.hero, ...state.gameStatus });

export default connect(mapStateToProps)(Game);
