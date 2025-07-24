import React from 'react';

interface PlayerProps {
    player: number;
    points: number;
}

const MultiplayerMenu = ({player = 1, points = 0}: PlayerProps) => {
    const showTriangleAndCurrentPlayer = player === 1 ? 'block' : 'hidden';
    const active =
        player === 1
            ? 'bg-(--clr-orange-400) text-(--clr-white)'
            : 'bg-(--clr-blue-100) text-(--clr-blue-400)';
    const pointsTextColor =
        player === 1 ? 'text-(--clr-white)' : 'text-(--clr-blue-800)';

    return (
        <div className="flex flex-col gap-y-(--space-200) w-[15.9375rem] font-bold leading-(--lh-125)">
            <div className="flex flex-col items-center justify-center">
                <div
                    className={`triangle ${showTriangleAndCurrentPlayer}`}></div>
                <div
                    className={` ${active} flex items-center justify-between  px-[1.4063rem] py-(--space-100) h-[4.5rem] rounded-[0.625rem] w-full`}>
                    <span className="text-(length:--fs-18)">
                        Player {player}
                    </span>
                    <span
                        className={`text-(length:--fs-32) ${pointsTextColor} `}>
                        {points}
                    </span>
                </div>
            </div>
            <p
                className={` ${showTriangleAndCurrentPlayer} text-(length:--fs-13) text-(--clr-blue-950) text-center uppercase tracking-(--ls-5)`}>
                Current turn
            </p>
        </div>
    );
};

export default MultiplayerMenu;
