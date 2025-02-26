import { GameLayout } from './ui/game-layout';
import { BackLink } from './ui/back-link';
import { GameTitle } from './ui/game-title';
import { GameInfo } from './ui/game-info';
import { PLAYERS } from './constants';
import { PlayerInfo } from './ui/player-info';
import { GameMoveInfo } from './ui/game-move-info';
import { useGameState } from './model/use-game-state';
import { GameCell } from './ui/game-cell';
import { GameOverModal } from './ui/game-over-modal';

const PLAYERS_COUNT = 2;

export function Game() {
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={'1 мин. на ход'} />}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={index}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            seconds={60}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            symbol={cell}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              handleCellClick(index);
            }}
          />
        ))}
      />

      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={index}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            seconds={60}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}
