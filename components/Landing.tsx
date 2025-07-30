import StartGameCard from './StartGameCard';

const Landing = () => {
    return (
        <div className="contianer flex flex-col items-center bg-(--clr-blue-950) gap-y-(--space-600) md:gap-y-(--space-1000) h-screen w-full pt-[6rem] md:pt-[10.4375rem]">
            <h1 className="text-(length:--fs-32) md:text-(length:--fs-40) text-(--clr-grey-50) font-bold leading-(--lh-125)">
                memory
            </h1>
            <StartGameCard />
        </div>
    );
};

export default Landing;
