'use client';

import {formatTime} from '@/utils';

interface SoloMenuProps {
    time: number;
    moves: number;
}

const SoloMenu = ({time, moves}: SoloMenuProps) => {
    return (
        <div className="flex gap-x-(--space-300) md:gap-x-(--space-400)">
            <div className="flex flex-col md:flex-row items-center justify-between bg-(--clr-blue-100) px-[1.4063rem] py-[0.625rem] md:py-(--space-100) h-[4.375rem] md:h-[4.5rem] rounded-[0.625rem] font-bold leading-(--lh-125) w-[9.4375rem] md:w-[15.9375rem]">
                <span className="text-(--clr-blue-400) text-(length:--fs-15) md:text-(length:--fs-18)">
                    Time
                </span>
                <span className="text-(--clr-blue-800) text-(length:--fs-24) md:text-(length:--fs-32)">
                    {formatTime(time)}
                </span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between bg-(--clr-blue-100) px-[1.4063rem] py-[0.625rem] md:py-(--space-100) h-[4.375rem] md:h-[4.5rem] rounded-[0.625rem] font-bold leading-(--lh-125) w-[9.4375rem] md:w-[15.9375rem]">
                <span className="text-(--clr-blue-400) text-(length:--fs-15) md:text-(length:--fs-18) ">
                    Moves
                </span>
                <span className="text-(--clr-blue-800) text-(length:--fs-24)  md:text-(length:--fs-32)">
                    {moves}
                </span>
            </div>
        </div>
    );
};

export default SoloMenu;
