'use client';

import Button from './Button';
import {formatTime} from '@/utils';

interface SoloGameResultProps {
    moves: number;
    time: number;
    restartGame: () => void;
    endGame: () => void;
}

const SoloGameResult = ({
    moves,
    time,
    restartGame,
    endGame,
}: SoloGameResultProps) => {
    return (
        <div className="fixed inset-0 w-full h-full bg-(--clr-black)/50 flex items-center justify-center z-10">
            <div className="flex flex-col gap-y-(--space-300) md:gap-y-(--space-500) bg-(--clr-grey-100) px-(--space-300) md:px-[3.4375rem] py-[1.75rem] md:py-[3.71875rem] rounded-[0.625rem] font-bold leading-(--lh-125) w-[20.4375rem] md:w-[40.875rem]">
                <div className="flex flex-col items-center gap-y-(--space-100) md:gap-y-(--space-300) lg:gap-y-(--space-400)">
                    <h3 className="text-(--clr-blue-950) text-(length:--fs-24) md:text-(length:--fs-48)">
                        You did it!
                    </h3>
                    <p className="text-(--clr-blue-400) text-(length:--fs-14) md:text-(length:--fs-18)">
                        Game over! Here&apos;s how you got on...
                    </p>
                </div>

                {/* Time and Moves */}
                <div className="flex flex-col gap-y-(--space-100) md:gap-y-(--space-200)">
                    <div className="flex justify-between items-center bg-(--clr-blue-100) px-(--space-200) py-[0.75rem] md:px-(--space-400) md:py-(--space-200) rounded-[0.3125rem] md:rounded-[1.25rem] h-(--space-600) md:h-[4.5rem]">
                        <span className="text-(length:--fs-14) md:text-(length:--fs-18) text-(--clr-blue-400)">
                            Time Elapsed
                        </span>
                        <span className="text-(length:--fs-20) md:text-(length:--fs-32) text-(--clr-blue-800)">
                            {formatTime(time)}
                        </span>
                    </div>

                    <div className="flex justify-between items-center bg-(--clr-blue-100) px-(--space-200) py-[0.75rem] md:px-(--space-400) md:py-(--space-200) rounded-[0.3125rem] h-(--space-600) md:h-[4.5rem] ">
                        <span className="text-(length:--fs-14) md:text-(length:--fs-18) text-(--clr-blue-400)">
                            Moves Taken
                        </span>
                        <span className="text-(length:--fs-20) md:text-(length:--fs-32) text-(--clr-blue-800)">
                            {moves} Moves
                        </span>
                    </div>
                </div>

                {/* Restart adn Setup New Game buttons */}
                <div className="flex flex-col gap-y-(--space-200) md:flex-row md:gap-x-(--space-200)">
                    <Button
                        variant="primary"
                        name="Restart"
                        styles="text-(length:--fs-18) py-[0.9375rem] md:flex-1"
                        onClick={restartGame}
                    />
                    <Button
                        variant="secondary"
                        name="Setup New Game"
                        styles="text-(length:--fs-18) py-[0.9375rem] md:flex-1"
                        onClick={endGame}
                    />
                </div>
            </div>
        </div>
    );
};

export default SoloGameResult;
