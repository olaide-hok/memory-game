'use client';

import {useMemoryGameContext} from '@/context';
import MenuBar from './MenuBar';
import MobileMenu from './MobileMenu';
import GameGrid from './GameGrid';
import MultiplayerMenu from './MultiplayerMenu';
import SoloMenu from './SoloMenu';
import SoloGameResult from './SoloGameResult';

const GameScreen = () => {
    const {game, time, moves, showMenu, gameOverModal, restartGame, endGame} =
        useMemoryGameContext();

    return (
        <div className="container flex flex-col items-center py-(--space-300) md:py-(--space-600) px-(--space-300) md:px-[2.5rem] md:pt-[2.3125rem] lg:pt-[4.1875rem] w-full">
            <MenuBar />

            {/* Grid Game board */}
            <GameGrid grid={game.grid} theme={game.theme} />

            {/* Player tiles */}
            {game.numOfPlayers > 1 ? (
                <div className="flex items-center  gap-x-(--space-300)">
                    {Array.from({length: game.numOfPlayers}).map((_, index) => (
                        <MultiplayerMenu
                            key={index}
                            player={index + 1}
                            points={0}
                        />
                    ))}
                </div>
            ) : (
                <SoloMenu time={time} moves={moves} />
            )}

            {/* Mobile Menu */}
            {showMenu && <MobileMenu />}

            {/* Game Over Modal */}
            {gameOverModal && (
                <SoloGameResult
                    time={time}
                    moves={moves}
                    restartGame={restartGame}
                    endGame={endGame}
                />
            )}
        </div>
    );
};

export default GameScreen;
