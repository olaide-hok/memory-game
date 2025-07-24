'use client';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'selection' | 'big-primary';
    name: string;
    styles?: string;
}

const variants = {
    primary: 'bg-(--clr-orange-400) hover:bg-(--clr-orange-300) text-white',
    secondary:
        'bg-(--clr-blue-100) hover:bg-(--clr-blue-400) text-(--clr-blue-800) hover:text-white',
    selection:
        'bg-(--clr-blue-300) hover:bg-(--clr-blue-350) focus-ring:bg-(--clr-blue-800) text-(--clr-grey-50) text-center py-[0.625rem]',
    'big-primary':
        'bg-(--clr-orange-400) hover:bg-(--clr-orange-300) text-white py-[0.875rem] text-center',
};

const Button = ({
    variant = 'primary',
    name,
    styles,
    ...props
}: React.ComponentProps<'button'> & ButtonProps) => {
    return (
        <button
            type="button"
            className={`${variants[variant]}  leading-(--lh-125) font-bold rounded-full cursor-pointer ${styles}`}
            {...props}>
            {name}
        </button>
    );
};

export default Button;
