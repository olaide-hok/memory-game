import Button from './Button';

type PlayerData = {
    player: number;
    numOfPairs: number;
};

function getTopScorers(data: PlayerData[]): PlayerData[] {
    if (data.length === 0) return [];

    const maxPairs = Math.max(...data.map((d) => d.numOfPairs));

    return data.filter((d) => d.numOfPairs === maxPairs);
}

interface ResultCardProps {
    type: 'solo' | 'multiplayer';
}

const detailsData = [
    {
        player: 3,
        numOfPairs: 8,
    },
    {
        player: 1,
        numOfPairs: 4,
    },
    {
        player: 2,
        numOfPairs: 3,
    },
    {
        player: 4,
        numOfPairs: 1,
    },
];

const ResultCard = ({type}: ResultCardProps) => {
    const topScorers = getTopScorers(detailsData);

    if (type === 'multiplayer') {
        return (
            <div className="flex flex-col gap-y-(--space-700) px-[3.4rem] py-(--space-700) rounded-[1.25rem]">
                <div className="flex flex-col gap-y-(--space-300) font-bold leading-(--lh-125) text-center">
                    <h2 className="text-(length:--fs-48) text-(--clr-blue-850)">
                        {topScorers.length === 1
                            ? `Player ${topScorers[0].player} Wins!`
                            : " It's a tie!"}
                    </h2>

                    <p className="text-(length:--fs-18) text-(--clr-blue-400)">
                        Game over! Here are the results…
                    </p>
                </div>

                {/* details */}
                <div className="flex flex-col gap-y-(--space-200)">
                    {detailsData.map((detail, index) => {
                        const isWinner = topScorers.some(
                            (winner) => winner.player === detail.player
                        );

                        const winner = isWinner
                            ? 'bg-(--clr-blue-950) text-(--clr-grey-50)'
                            : 'bg-(--clr-blue-100) text-(--clr-blue-400)';

                        return (
                            <div
                                key={index}
                                className={`flex items-center justify-between ${winner} rounded-[0.625rem]  py-(--space-200) px-(--space-400) font-bold leading-(--lh-125)`}>
                                <p className="text-(length:--fs-18)">
                                    Player {detail.player}
                                    {isWinner ? ' (Winner!)' : ''}
                                </p>
                                <p
                                    className={`text-(length:--fs-32) text-${
                                        !isWinner ? '(--clr-blue-800)' : ''
                                    } `}>
                                    {detail.numOfPairs} Pairs
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Buttons */}
                <div className="flex gap-x-(--space-200)">
                    <Button
                        variant="big-primary"
                        name="Restart"
                        styles="w-[16.5rem]"
                    />
                    <Button
                        variant="secondary"
                        name="Setup New Game"
                        styles="w-[16.5rem]"
                    />
                </div>
            </div>
        );
    }

    if (type === 'solo') {
        return (
            <div className="flex flex-col gap-y-(--space-700) px-[3.4rem] py-(--space-700) rounded-[1.25rem]">
                <div className="flex flex-col gap-y-(--space-300) font-bold leading-(--lh-125) text-center">
                    <h2 className="text-(length:--fs-48) text-(--clr-blue-850)">
                        You did it!
                    </h2>

                    <p className="text-(length:--fs-18) text-(--clr-blue-400)">
                        Game over! Here are the results…
                    </p>
                </div>

                {/* details */}
                <div className="flex flex-col gap-y-(--space-200)">
                    <div
                        className={`flex items-center justify-between bg-(--clr-blue-100) rounded-[0.625rem]  py-(--space-200) px-(--space-400) font-bold leading-(--lh-125)`}>
                        <p className="text-(length:--fs-18) text-(--clr-blue-400)">
                            Time Elapsed
                        </p>
                        <p
                            className={`text-(length:--fs-32) text-(--clr-blue-800)`}>
                            1:53
                        </p>
                    </div>
                    <div
                        className={`flex items-center justify-between bg-(--clr-blue-100) rounded-[0.625rem]  py-(--space-200) px-(--space-400) font-bold leading-(--lh-125)`}>
                        <p className="text-(length:--fs-18) text-(--clr-blue-400)">
                            Moves Taken
                        </p>
                        <p
                            className={`text-(length:--fs-32) text-(--clr-blue-800)`}>
                            39 Moves
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-x-(--space-200) ">
                    <Button
                        variant="big-primary"
                        name="Restart"
                        styles="w-[16.5rem]"
                    />
                    <Button
                        variant="secondary"
                        name="Setup New Game"
                        styles="w-[16.5rem]"
                    />
                </div>
            </div>
        );
    }

    return null;
};

export default ResultCard;
