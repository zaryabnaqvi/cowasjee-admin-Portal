export const TextLink = ({ children, href, className }) => {
    return (
        <a
            href={href}
            className={`font-medium text-amber-500 hover:text-amber-600 active:text-amber-700 hover:underline${
                className ? ` ${className}` : ""
            }`}
        >
            {children}
        </a>
    );
};
