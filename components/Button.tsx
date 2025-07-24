'use client';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'selection' | 'big-primary';
    name: string;
    styles?: string;
}

const variants = {
    primary:
        'bg-(--clr-orange-400) hover:bg-(--clr-orange-300) text-(length:--fs-20) text-white py-[0.875rem] px-[1.625rem]',
    secondary:
        'bg-(--clr-blue-100) hover:bg-(--clr-blue-400) text-(length:--fs-20) text-(--clr-blue-800) hover:text-white py-[0.875rem]',
    selection:
        'bg-(--clr-blue-300) hover:bg-(--clr-blue-350) text-(length:--fs-20) focus-ring:bg-(--clr-blue-800) text-(--clr-grey-50) text-center py-[0.625rem]',
    'big-primary':
        'bg-(--clr-orange-400) hover:bg-(--clr-orange-300) text-white text-(length:--fs-32) py-[0.875rem] text-center h-[4.375rem]',
};

const Button = ({variant = 'primary', name, styles, ...props}: ButtonProps) => {
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
