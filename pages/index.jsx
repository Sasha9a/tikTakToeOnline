import { Header } from '../components/header';
import { GameField, GameInfo, GameSymbol, GameTitle, useGameState } from '../components/game';
import { useState } from 'react';

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol, handlePlayerTimeOver } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
          className="mt-4"
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          handleCellClick={handleCellClick}
          className="mt-6"
        />
      </main>
    </div>
  );
}
