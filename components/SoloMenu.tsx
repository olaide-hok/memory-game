const SoloMenu = () => {
    return (
        <div className="flex gap-x-(--space-200)">
            <div className="flex items-center justify-between bg-(--clr-blue-100) px-[1.4063rem] py-(--space-100) h-[4.5rem] rounded-[0.625rem] font-bold leading-(--lh-125) w-[15.9375rem]">
                <span className="text-(--clr-blue-400) text-(length:--fs-18)">
                    Time
                </span>
                <span className="text-(--clr-blue-800) text-(length:--fs-32)">
                    0:01
                </span>
            </div>
            <div className="flex items-center justify-between bg-(--clr-blue-100) px-[1.4063rem] py-(--space-100) h-[4.5rem] rounded-[0.625rem] font-bold leading-(--lh-125) w-[15.9375rem]">
                <span className="text-(--clr-blue-400) text-(length:--fs-18) ">
                    Moves
                </span>
                <span className="text-(--clr-blue-800) text-(length:--fs-32)">
                    0
                </span>
            </div>
        </div>
    );
};

export default SoloMenu;
