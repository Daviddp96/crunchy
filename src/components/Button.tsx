interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    const classes = 'bg-orange-500 duration-300 hover:bg-orange-900 min-w-6 p-3 rounded-md font-semibold text-lg tracking-wide shadow-lg shadow-[#292524]';

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;