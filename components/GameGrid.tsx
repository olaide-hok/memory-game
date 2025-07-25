'use client';

import {useState} from 'react';

interface GameGridProps {
    grid: '4x4' | '6x6' | '';
    theme: 'numbers' | 'icons' | '';
}

const iconSet = [
    '🎯',
    '🐶',
    '🚀',
    '🍕',
    '🎵',
    '🌟',
    '📚',
    '🧠',
    '🕹️',
    '🎲',
    '🚲',
    '🌈',
    '🔥',
    '🎁',
    '👾',
    '⚽️',
    '🍔',
    '🎮',
];

const GameGrid: React.FC<GameGridProps> = ({grid, theme}) => {
    const size = grid === '4x4' ? 4 : 6;
    const totalCells = size * size;

    const [revealed, setRevealed] = useState<boolean[]>(
        Array(totalCells).fill(false)
    );

    const handleCellClick = (index: number) => {
        setRevealed((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    const getCellValue = (index: number) => {
        if (theme === 'numbers') return Math.floor(index / 2) + 1;
        return iconSet[Math.floor(index / 2) % iconSet.length];
    };

    const values = Array.from({length: totalCells}, (_, i) =>
        getCellValue(i)
    ).sort(() => 0.5 - Math.random());

    return (
        <div
            className={`grid  ${
                size === 4
                    ? 'grid-cols-4 w-[20.375rem] md:w-[34rem] h-[20.375rem] md:gap-(--space-300) md:h-[34rem] mt-[5rem] mb-[6.4375rem] md:my-[8.4375rem] lg:mt-[6.1875rem] lg:mb-[7.5rem]'
                    : 'grid-cols-6 gap-(--space-100) md:gap-(--space-200) w-[20.0625rem] h-[20.0625rem] mt-[7.5625rem] mb-[7rem] md:my-[7.5625rem] md:w-[35.75rem] md:h-[35.75rem] lg:mt-[5.3125rem] lg:mb-[6.625rem] '
            } justify-items-center items-center`}>
            {values.map((value, index) => (
                <button
                    type="button"
                    key={index}
                    onClick={() => handleCellClick(index)}
                    className={`aspect-square ${
                        size === 4
                            ? 'h-[4.5331rem] md:h-[7.375rem] w-[4.5331rem] md:w-[7.375rem]  text-(length:--fs-40) md:text-(length:--fs-56)'
                            : 'w-[2.9299rem] h-[2.9299rem] md:h-[5.125rem] md:w-[5.125rem] text-(length:--fs-24) md:text-(length:--fs-44)'
                    } rounded-full bg-(--clr-blue-800) flex items-center justify-center text-(--clr-grey-50)  font-bold leading-(--lh-125) cursor-pointer transition-all`}>
                    {revealed[index] ? value : ''}
                </button>
            ))}
        </div>
    );
};

export default GameGrid;
