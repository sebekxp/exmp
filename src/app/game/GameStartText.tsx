'use client';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';

type GameStartTextProps = ReturnType<typeof mapStateToProps>;
function GameStartText({ isGameStarted }: GameStartTextProps) {
  if (isGameStarted) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <h1 className="text-6xl text-center text-amber-400 font-bold">
        Memorize the Map Before Embarking on Your First Journey
      </h1>
      <h3 className="text-2xl text-center animate-bounce">Get Moving and Begin Your Adventur!</h3>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  ...state.gameStatus,
});

export default connect(mapStateToProps)(GameStartText);
