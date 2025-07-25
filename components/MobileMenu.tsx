import {useMemoryGameContext} from '@/context';
import Button from './Button';

const MobileMenu = () => {
    const {setShowMenu, endGame} = useMemoryGameContext();
    return (
        <div className="fixed inset-0 w-full h-full bg-(--clr-black)/50 flex items-center justify-center z-10">
            <div className="flex flex-col gap-y-(--space-200) bg-(--clr-grey-100) p-(--space-300) rounded-[0.625rem] max-w-[20.4375rem] w-full">
                <Button
                    variant="primary"
                    name="Restart"
                    styles="text-(length:--fs-18) py-[0.75rem]"
                />
                <Button
                    variant="secondary"
                    name="New Game"
                    styles="text-(length:--fs-18) py-[0.75rem]"
                    onClick={endGame}
                />
                <Button
                    variant="secondary"
                    name="Resume"
                    styles="text-(length:--fs-18) py-[0.75rem]"
                    onClick={() => setShowMenu(false)}
                />
            </div>
        </div>
    );
};

export default MobileMenu;
