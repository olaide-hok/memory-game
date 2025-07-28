'use client';

import {useMemoryGameContext} from '@/context';
import Button from './Button';

const MenuBar = () => {
    const {setShowMenu, endGame, restartGame} = useMemoryGameContext();

    return (
        <div className="flex justify-between md:max-w-[43.0625rem] lg:max-w-[69.375rem] w-full">
            <h1 className="text-(length:--fs-24) md:text-(length:--fs-40) text-(--clr-blue-950) font-bold leading-(--lh-125)">
                memory
            </h1>

            <div className="flex gap-x-(--space-200)">
                <Button
                    variant="primary"
                    name="Menu"
                    styles="text-(length:--fs-16) w-[4.875rem] py-[0.625rem] block md:hidden"
                    onClick={() => setShowMenu(true)}
                />
                <Button
                    variant="primary"
                    name="Restart"
                    styles="text-(length:--fs-20) w-[7.9375rem] py-[0.84375rem] hidden md:block"
                    onClick={restartGame}
                />
                <Button
                    variant="secondary"
                    name="New Game"
                    styles="w-[9.3125rem] text-(length:--fs-20) hidden md:block"
                    onClick={endGame}
                />
            </div>
        </div>
    );
};

export default MenuBar;
