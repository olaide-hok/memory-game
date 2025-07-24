'use client';

import {createContext, useContext, useState} from 'react';

export interface GamePreferences {
    theme: 'numbers' | 'icons' | '';
    numOfPlayers: number;
    grid: '4x4' | '6x6' | '';
}

interface MemoryGameContext {
    game: GamePreferences;
    setGamePreferences: (preferences: Partial<GamePreferences>) => void;
    handleStartGame: () => void;
    showGameScreen: boolean;
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
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

    const [game, setGame] = useState<GamePreferences>({
        theme: '',
        numOfPlayers: 0,
        grid: '',
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

    return (
        <MemoryGameContext
            value={{
                game,
                setGamePreferences,
                handleStartGame,
                showGameScreen,
                showMenu,
                setShowMenu,
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
