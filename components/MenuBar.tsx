import Button from './Button';

const MenuBar = () => {
    return (
        <div className="flex justify-between">
            <h1 className="text-(length:--fs-40) text-(--clr-blue-950) font-bold leading-(--lh-125)">
                memory
            </h1>
            <div className="flex gap-x-(--space-200)">
                <Button variant="primary" name="Restart" />
                <Button
                    variant="secondary"
                    name="New Game"
                    styles="w-[9.3125rem]"
                />
            </div>
        </div>
    );
};

export default MenuBar;
