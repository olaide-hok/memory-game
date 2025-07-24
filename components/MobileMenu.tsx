import Button from './Button';

const MobileMenu = () => {
    return (
        <div className="flex flex-col gap-y-(--space-200) bg-(--clr-grey-100) p-(--space-300) rounded-[0.625rem]">
            <Button variant="primary" name="Restart" />
            <Button variant="secondary" name="New Game" />
            <Button variant="secondary" name="Resume" />
        </div>
    );
};

export default MobileMenu;
