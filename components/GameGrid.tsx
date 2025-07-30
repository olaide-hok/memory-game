'use client';

import {useMemoryGameContext} from '@/context';
import {useEffect, useState} from 'react';
import {iconSvgToUse} from '@/utils';

interface GameGridProps {
    grid: '4x4' | '6x6';
    theme: 'numbers' | 'icons';
}

// Generate values with pairs
const generateValues = (totalPairs: number, theme: string, size: number) => {
    const iconToUse = iconSvgToUse(size);
    const values = Array.from({length: totalPairs}, (_, i) =>
        theme === 'numbers' ? i + 1 : iconToUse[i % iconToUse.length]
    ).flatMap((value) => [value, value]); // Create pairs
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]]; // Shuffle
    }
    return values;
};

const GameGrid: React.FC<GameGridProps> = ({grid, theme}) => {
    const size = grid === '4x4' ? 4 : 6;
    const totalCells = size * size;
    const totalPairs = totalCells / 2;

    const {
        startTimer,
        setMoves,
        onGameComplete,
        resetSignal,
        isMultiplayer,
        currentPlayer,
        nextTurn,
        pairsMatched,
        setPairsMatched,
    } = useMemoryGameContext();

    const [revealed, setRevealed] = useState<boolean[]>(
        Array(totalCells).fill(false)
    );
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<number>(0);
    const [canClick, setCanClick] = useState<boolean>(true);
    const [matchedTiles, setMatchedTiles] = useState<boolean[]>(
        Array(totalCells).fill(false)
    ); // Track matched tiles

    const [values, setValues] = useState<(number | React.JSX.Element)[]>(
        generateValues(totalPairs, theme, size)
    );

    const handleCellClick = (index: number) => {
        if (!canClick || revealed[index] || matchedTiles[index]) return;

        setRevealed((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });

        if (!revealed.some(Boolean)) {
            startTimer(); // Start timer on first click
        }

        setSelectedIndices((prev) => {
            const newSelected = [...prev, index];
            if (newSelected.length === 2) {
                setCanClick(false);
                checkMatch(newSelected);
            }
            return newSelected;
        });
    };

    const checkMatch = (indices: number[]) => {
        const [firstIndex, secondIndex] = indices;
        if (values[firstIndex] === values[secondIndex]) {
            setMatchedPairs((prev) => prev + 1);
            setMatchedTiles((prev) => {
                const updated = [...prev];
                updated[firstIndex] = true;
                updated[secondIndex] = true;
                return updated;
            });
            if (isMultiplayer) {
                setPairsMatched(currentPlayer, pairsMatched[currentPlayer] + 1); // increment pairs for current player
                nextTurn(); // Switch turn only in multiplayer mode
            } else {
                setMoves((prev) => prev + 1); // Increment moves only on match for solo mode
            }
            setSelectedIndices([]);
            setCanClick(true);
        } else {
            setTimeout(() => {
                setRevealed((prev) => {
                    const updated = [...prev];
                    updated[firstIndex] = false;
                    updated[secondIndex] = false;
                    return updated;
                });
                setSelectedIndices([]);
                setCanClick(true);
                if (isMultiplayer) {
                    nextTurn(); // Switch turn only in multiplayer mode
                } else {
                    setMoves((prev) => prev + 1); // Increment moves only on mismatch for solo mode
                }
            }, 500); // Delay to show mismatch
        }
    };

    // Reset game when grid or theme changes
    useEffect(() => {
        setRevealed(Array(totalCells).fill(false));
        setSelectedIndices([]);
        setMatchedPairs(0);
        setCanClick(true);
        setMatchedTiles(Array(totalCells).fill(false));
        setValues(generateValues(totalPairs, theme, size));
    }, [resetSignal]);

    // Handle game completion
    useEffect(() => {
        if (matchedPairs === totalPairs) {
            onGameComplete(true);
        }
    }, [matchedPairs, totalPairs]);

    const getBgColor = (index: number) => {
        if (matchedTiles[index]) return 'bg-(--clr-orange-400)';
        if (revealed[index]) return 'bg-(--clr-blue-300)';
        return 'bg-(--clr-blue-800)';
    };

    return (
        <div
            className={`grid  ${
                size === 4
                    ? 'grid-cols-4 w-[20.375rem] md:w-[34rem] h-[20.375rem] md:gap-(--space-300) md:h-[34rem] mt-[5rem] mb-[6.4375rem] md:my-[8.4375rem] lg:mt-[6.1875rem] lg:mb-[7.5rem]'
                    : 'grid-cols-6 gap-(--space-100) md:gap-(--space-200) w-[20.0625rem] h-[20.0625rem] mt-[7.5625rem] mb-[7rem] md:my-[7.5625rem] md:w-[35.75rem] md:h-[35.75rem] lg:mt-[5.3125rem] lg:mb-[6.625rem] '
            } justify-items-center items-center`}>
            {values.map((value, index) => {
                return (
                    <button
                        type="button"
                        key={index}
                        onClick={() => handleCellClick(index)}
                        className={`aspect-square ${
                            size === 4
                                ? 'h-[4.5331rem] md:h-[7.375rem] w-[4.5331rem] md:w-[7.375rem] text-(length:--fs-40) md:text-(length:--fs-56)'
                                : 'w-[2.9299rem] h-[2.9299rem] md:h-[5.125rem] md:w-[5.125rem] text-(length:--fs-24) md:text-(length:--fs-44)'
                        } rounded-full flex items-center justify-center text-(--clr-grey-50) font-bold leading-(--lh-125) cursor-pointer transition-all ${
                            !revealed[index]
                                ? 'hover:bg-(--clr-blue-350)'
                                : 'hover:cursor-not-allowed'
                        } ${getBgColor(index)}                        
                        `}>
                        {revealed[index] ? value : ''}
                    </button>
                );
            })}
        </div>
    );
};

export default GameGrid;
