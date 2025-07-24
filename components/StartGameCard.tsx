'use client';

import {useMemoryGameContext} from '@/context';
import Button from './Button';

const StartGameCard = () => {
    const {game, setGamePreferences, handleStartGame} = useMemoryGameContext();

    return (
        <div className="flex flex-col gap-y-(--space-400) bg-(--clr-grey-50) p-[1.59rem] md:p-[3.4rem] rounded-[1.25rem]">
            {/* Select Theme */}
            <div className="flex flex-col gap-y-(--space-100) md:gap-y-(--space-200)">
                <p className="text-(length:--fs-15) md:text-(length:--fs-20) text-(--clr-blue-400) font-bold leading-(--lh-125)">
                    Select Theme
                </p>
                <div className="flex gap-x-(--space-100) md:gap-x-(--space-400)">
                    <Button
                        variant="selection"
                        name="Numbers"
                        value="numbers"
                        styles={`text-(length:--fs-16) md:text-(length:--fs-26) w-[8.375rem] md:w-[16rem] ${
                            game.theme === 'numbers'
                                ? 'bg-(--clr-blue-800)'
                                : ''
                        }`}
                        onClick={() => setGamePreferences({theme: 'numbers'})}
                    />

                    <Button
                        variant="selection"
                        name="Icons"
                        value="icons"
                        styles={`text-(length:--fs-16) md:text-(length:--fs-26) w-[8.375rem] md:w-[16rem] ${
                            game.theme === 'icons' ? 'bg-(--clr-blue-800)' : ''
                        }`}
                        onClick={() => setGamePreferences({theme: 'icons'})}
                    />
                </div>
            </div>

            {/* Number of Players */}
            <div className="flex flex-col gap-y-(--space-100) md:gap-y-(--space-200)">
                <p className="text-(length:--fs-15) md:text-(length:--fs-20) text-(--clr-blue-400) font-bold leading-(--lh-125)">
                    Number of Players
                </p>
                <div className="flex gap-x-(--space-100) md:gap-x-(--space-200)">
                    {[1, 2, 3, 4].map((num) => (
                        <Button
                            key={num}
                            variant="selection"
                            name={String(num)}
                            styles={`text-(length:--fs-16) md:text-(length:--fs-26) w-[3.9375rem] md:w-[7.375rem] ${
                                game.numOfPlayers === num
                                    ? 'bg-(--clr-blue-800)'
                                    : ''
                            }`}
                            onClick={() =>
                                setGamePreferences({numOfPlayers: num})
                            }
                        />
                    ))}
                </div>
            </div>

            {/* Grid Size */}
            <div className="flex flex-col gap-y-(--space-100) md:gap-y-(--space-200)">
                <p className="text-(length:--fs-15) md:text-(length:--fs-20) text-(--clr-blue-400) font-bold leading-(--lh-125)">
                    Grid Size
                </p>
                <div className="flex gap-x-(--space-100) md:gap-x-(--space-400)">
                    {['4x4', '6x6'].map((grid) => (
                        <Button
                            key={grid}
                            variant="selection"
                            name={grid}
                            value={grid}
                            styles={`text-(length:--fs-16) md:text-(length:--fs-26) w-[8.375rem] md:w-[16rem] ${
                                game.grid === grid ? 'bg-(--clr-blue-800)' : ''
                            }`}
                            onClick={() => setGamePreferences({grid})}
                        />
                    ))}
                </div>
            </div>

            {/* Start Game */}
            <Button
                variant="big-primary"
                name="Start Game"
                styles="text-(length:--fs-18) md:text-(length:--fs-32)"
                onClick={() => {
                    handleStartGame();
                }}
            />
        </div>
    );
};

export default StartGameCard;
