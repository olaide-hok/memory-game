'use client';

import {createContext, useContext, useEffect, useState} from 'react';

export interface GamePreferences {
    theme: 'numbers' | 'icons';
    numOfPlayers: number;
    grid: '4x4' | '6x6';
}

interface MemoryGameContext {
    game: GamePreferences;
    setGamePreferences: (preferences: Partial<GamePreferences>) => void;
    handleStartGame: () => void;
    showGameScreen: boolean;
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    endGame: () => void;
    setMoves: React.Dispatch<React.SetStateAction<number>>;
    time: number;
    moves: number;
    startTimer: () => void;
    restartGame: () => void;
    onGameComplete: (isComplete: boolean) => void;
    resetSignal: boolean; // Signal to trigger reset in GameGrid
    gameOverModal: boolean;
}

const MemoryGameContext = createContext<MemoryGameContext | undefined>(
    undefined
);

const MemoryGameProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showGameScreen, setShowGameScreen] = useState(false);
    const [gameOverModal, setGameOverModal] = useState(false);

    const [time, setTime] = useState<number>(0); // Time in seconds
    const [moves, setMoves] = useState<number>(0); // Moves counter
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false); // Timer control
    const [resetSignal, setResetSignal] = useState<boolean>(false); // Reset signal state
    const [game, setGame] = useState<GamePreferences>({
        theme: 'numbers',
        numOfPlayers: 1,
        grid: '4x4',
    });

    const setGamePreferences = (preferences: Partial<GamePreferences>) => {
        setGame((prevGame) => ({
            ...prevGame,
            ...preferences,
        }));
    };

    const handleStartGame = () => {
        const {theme, numOfPlayers, grid} = game;

        const isValid =
            theme.trim() !== '' && numOfPlayers > 0 && grid.trim() !== '';

        if (!isValid) {
            alert(
                'Please select all game preferences before starting the game.'
            );
            return;
        }

        // Proceed to show the game screen
        setShowGameScreen(true);
    };

    // Restart Game Fn
    const restartGame = () => {
        setTime(0);
        setMoves(0);
        setIsTimerRunning(false);
        setShowMenu(false);
        setResetSignal((prev) => !prev); // Toggle reset signal to trigger GameGrid reset
        setGameOverModal(false);
    };

    // End Game Fn passed to the 'New Game' button
    const endGame = () => {
        setShowGameScreen(false);
        setShowMenu(false);
        setGame({
            theme: 'numbers',
            numOfPlayers: 1,
            grid: '4x4',
        });
        restartGame();
    };

    // Timer logic
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (isTimerRunning && time >= 0) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else if (!isTimerRunning && time !== 0 && timer) {
            clearInterval(timer);
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isTimerRunning, time]);

    const startTimer = () => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
    };

    const onGameComplete = (isComplete: boolean) => {
        if (isComplete) {
            setIsTimerRunning(false); // Stop the timer when game is complete
            setGameOverModal(true);
        }
    };

    return (
        <MemoryGameContext
            value={{
                game,
                setGamePreferences,
                handleStartGame,
                showGameScreen,
                showMenu,
                setShowMenu,
                endGame,
                moves,
                setMoves,
                time,
                startTimer,
                restartGame,
                onGameComplete,
                resetSignal,
                gameOverModal,
            }}>
            {children}
        </MemoryGameContext>
    );
};

export default MemoryGameProvider;

export const useMemoryGameContext = () => {
    const context = useContext(MemoryGameContext);
    if (!context) {
        throw new Error(
            'useMemoryGameContext must be used within a MemoryGame provider'
        );
    }
    return context;
};
