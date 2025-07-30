import Button from './Button';

type PlayerData = {
    id: number;
    move: number;
};

function getTopScorers(data: PlayerData[]): PlayerData[] {
    if (data.length === 0) return [];

    const maxPairs = Math.max(...data.map((d) => d.move));

    return data.filter((d) => d.move === maxPairs);
}

interface ResultCardProps {
    type: 'solo' | 'multiplayer';
    pairsMatched: {[key: number]: number};
    numOfPlayers: number;
    restartGame: () => void;
    endGame: () => void;
}

const ResultCard = ({
    type,
    pairsMatched,
    restartGame,
    endGame,
    numOfPlayers,
}: ResultCardProps) => {
    const topScorers = getTopScorers(
        Object.entries(pairsMatched)
            .filter(([id]) => parseInt(id) <= numOfPlayers)
            .map(([id, move]) => ({
                id: parseInt(id),
                move: move,
            }))
    );

    if (type === 'multiplayer') {
        return (
            <div className="fixed inset-0 w-full h-full bg-(--clr-black)/50 flex items-center justify-center z-10">
                <div className="flex flex-col gap-y-(--space-300) md:gap-y-(--space-500) rounded-[1.25rem] bg-(--clr-grey-100) px-(--space-300) md:px-[3.4375rem] py-[1.75rem] md:py-[3.71875rem] w-[20.4375rem] md:w-[40.875rem] font-bold leading-(--lh-125)">
                    <div className="flex flex-col gap-y-(--space-100) md:gap-y-(--space-300) text-center">
                        <h2 className="text-(length:--fs-24) md:text-(length:--fs-48) text-(--clr-blue-850)">
                            {topScorers.length === 1
                                ? `Player ${topScorers[0].move} Wins!`
                                : " It's a tie!"}
                        </h2>

                        <p className="text-(length:--fs-14) md:text-(length:--fs-18) text-(--clr-blue-400)">
                            Game over! Here are the results…
                        </p>
                    </div>

                    {/* details */}
                    <div className="flex flex-col gap-y-(--space-100) md:gap-y-(--space-200)">
                        {Object.entries(pairsMatched)
                            .filter(([id]) => parseInt(id) <= numOfPlayers)
                            .sort(([, a], [, b]) => b - a)
                            .map(([id, move]) => {
                                const isWinner = topScorers.some(
                                    (winner) => winner.id === parseInt(id)
                                );

                                const winner = isWinner
                                    ? 'bg-(--clr-blue-950) text-(--clr-grey-50)'
                                    : 'bg-(--clr-blue-100) text-(--clr-blue-400)';

                                return (
                                    <div
                                        key={id}
                                        className={`flex items-center justify-between ${winner} font-bold leading-(--lh-125) px-(--space-200) py-[0.75rem] md:px-(--space-400) md:py-(--space-200) rounded-[0.3125rem] md:rounded-[1.25rem] h-(--space-600) md:h-[4.5rem]`}>
                                        <p className="text-(length:--fs-14) md:text-(length:--fs-18)">
                                            Player {id}
                                            {isWinner ? ' (Winner!)' : ''}
                                        </p>
                                        <p
                                            className={`text-(length:--fs-20) md:text-(length:--fs-32) text-${
                                                !isWinner
                                                    ? '(--clr-blue-800)'
                                                    : ''
                                            } `}>
                                            {move} Pairs
                                        </p>
                                    </div>
                                );
                            })}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-y-(--space-200) md:flex-row md:gap-x-(--space-200)">
                        <Button
                            variant="big-primary"
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
