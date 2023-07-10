'use client';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import { GAME_STATUS } from '../types/gameStatus';

type GameProgressProps = ReturnType<typeof mapStateToProps>;
function GameProgress({ mapExploredProgress, status }: GameProgressProps) {
  const circumference = 40 * 2 * Math.PI;

  if (status === GAME_STATUS.NOT_STARTED) {
    return null;
  }


  return (
    <div className="container">
      <div className="fixed inset-x-0 top-0 z-50 bg-sky-200">
        <div className="h-2 bg-sky-900" style={{ width: `${mapExploredProgress * 100}%` }} />
      </div>

      <div className="fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-8 left-8 z-10">
        <svg className="w-20 h-20">
          <circle
            className="text-sky-200"
            strokeWidth="12"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="40"
            cy="40"
          />
          <circle
            className="text-sky-900"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - ((mapExploredProgress * 100) / 100) * circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="40"
            cy="40"
          />
        </svg>
        <span className="absolute text-lg text-900">{`${(mapExploredProgress * 100).toFixed(
          2,
        )}%`}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  ...state.gameStatus,
});

export default connect(mapStateToProps)(GameProgress);
