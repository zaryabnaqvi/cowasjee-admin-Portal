export const TextLink = ({ children, href, className }) => {
    return (
        <a
            href={href}
            className={`font-medium text-red-500 hover:text-red-600 active:text-red-700 hover:underline${
                className ? ` ${className}` : ""
            }`}
        >
            {children}
        </a>
    );
};
