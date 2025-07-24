import Button from './Button';

const StartGameCard = () => {
    return (
        <div className="flex flex-col gap-y-(--space-400) bg-(--clr-grey-50) p-[3.4rem] rounded-[1.25rem]">
            {/* Select Theme */}
            <div className="flex flex-col gap-y-(--space-200)">
                <p className="text-(length:--fs-20) text-(--clr-blue-400) font-bold leading-(--lh-125)">
                    Select Theme
                </p>
                <div className="flex gap-x-(--space-400)">
                    <Button
                        variant="selection"
                        name="Numbers"
                        styles="text-(length:--fs-26) w-[16rem]"
                    />
                    <Button
                        variant="selection"
                        name="Icons"
                        styles="text-(length:--fs-26) w-[16rem]"
                    />
                </div>
            </div>

            {/* Number of Players */}
            <div className="flex flex-col gap-y-(--space-200)">
                <p className="text-(length:--fs-20) text-(--clr-blue-400) font-bold leading-(--lh-125)">
                    Number of Players
                </p>
                <div className="flex gap-x-(--space-200)">
                    <Button
                        variant="selection"
                        styles="text-(length:--fs-26) w-[7.375rem]"
                        name="1"
                    />
                    <Button
                        variant="selection"
                        styles=" text-(length:--fs-26) w-[7.375rem]"
                        name="2"
                    />
                    <Button
                        variant="selection"
                        styles="text-(length:--fs-26) w-[7.375rem]"
                        name="3"
                    />
                    <Button
                        variant="selection"
                        styles="text-(length:--fs-26) w-[7.375rem]"
                        name="4"
                    />
                </div>
            </div>

            {/* Grid Size */}
            <div className="flex flex-col gap-y-(--space-200)">
                <p className="text-(length:--fs-20) text-(--clr-blue-400) font-bold leading-(--lh-125)">
                    Grid Size
                </p>
                <div className="flex gap-x-(--space-400)">
                    <Button
                        variant="selection"
                        name="4x4"
                        styles="text-(length:--fs-26) w-[16rem]"
                    />
                    <Button
                        variant="selection"
                        name="6x6"
                        styles="text-(length:--fs-26) w-[16rem]"
                    />
                </div>
            </div>

            {/* Start Game */}
            <Button variant="big-primary" name="Start Game" />
        </div>
    );
};

export default StartGameCard;
