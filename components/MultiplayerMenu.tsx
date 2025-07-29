import React from 'react';

interface PlayerProps {
    player: string;
    points: number;
    currentPlayer: number;
}

const MultiplayerMenu = ({player, points, currentPlayer}: PlayerProps) => {
    const showTriangleAndCurrentPlayer =
        parseInt(player) === currentPlayer
            ? 'block bg-(--clr-orange-400)'
            : 'block bg-transparent';
    const active =
        parseInt(player) === currentPlayer
            ? 'bg-(--clr-orange-400) text-(--clr-white)'
            : 'bg-(--clr-blue-100) text-(--clr-blue-400)';
    const pointsTextColor =
        parseInt(player) === currentPlayer
            ? 'text-(--clr-white)'
            : 'text-(--clr-blue-800)';

    return (
        <div className="flex flex-col gap-y-(--space-200) w-[4rem] md:w-[10.375rem] xl:w-[15.9375rem] font-bold leading-(--lh-125)">
            <div className="flex flex-col items-center justify-center">
                <div
                    className={`triangle w-(--space-200) md:w-(--space-300) lg:w-[2.4099rem] h-(--space-100) md:h-[0.75rem] lg:h-[1.24049rem] ${showTriangleAndCurrentPlayer}`}></div>
                <div
                    className={` ${active} flex flex-col xl:flex-row items-center justify-between md:items-start xl:items-center md:gap-y-[1.125rem] md:justify-normal xl:justify-between py-[0.6563rem] md:py-[0.75rem] lg:py-(--space-100) md:px-(--space-200) h-[4.5rem] md:h-[5rem] rounded-[0.625rem] w-full`}>
                    <span className=" text-(length:--fs-15) md:text-(length:--fs-18)">
                        P<span className="hidden md:inline">layer </span>
                        {player}
                    </span>
                    <span
                        className={`text-(length:--fs-24) lg:text-(length:--fs-32) ${pointsTextColor} `}>
                        {points}
                    </span>
                </div>
            </div>
            <p
                className={` hidden xl:block text-(length:--fs-13) text-(--clr-blue-950) text-center uppercase tracking-(--ls-5)`}>
                Current turn
            </p>
        </div>
    );
};

export default MultiplayerMenu;
