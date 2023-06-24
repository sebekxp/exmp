'use client';

import { connect } from 'react-redux';
import { useCanvas } from '../hooks/useCanvas';
import { useGameLoop } from '../hooks/useGameLoop';
import { RootState } from '../redux/store';
import CanvasContext from './canvasContext';
import { HEIGHT, WIDTH } from './constans';

type GameProps = { children?: React.ReactNode } & ReturnType<typeof mapStateToProps>;

function Game({ children, hero }: GameProps) {
  console.log(hero);
  const [canvasRef, ctx] = useCanvas();
  const { isVisible } = useGameLoop(hero);

  return (
    <CanvasContext.Provider value={ctx}>
      <div className="relative">
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="absolute z-10" />
        {isVisible && children}
      </div>
    </CanvasContext.Provider>
  );
}

const mapStateToProps = (state: RootState) => ({ hero: state.hero });

export default connect(mapStateToProps)(Game);
