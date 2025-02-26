import clsx from 'clsx';
import { GameSymbol } from './game-symbol';

export function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      className={clsx(
        'border border-slate-200 cursor-pointer -ml-px -mt-px flex items-center justify-center',
        isWinner && 'bg-orange-600/10'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}
