import { ReactNode } from "react";

interface PaginationButtonInterface {
    children: ReactNode;
    isRounded?: boolean;
    isActive?: boolean;
    onClick?: () => void;
}

function PaginationButton({
    isRounded = false,
    isActive = false,
    onClick,
    children,
}: PaginationButtonInterface) {
    return (
        <button
            type="button"
            className={
                (isRounded ? "rounded-full " : "rounded ") +
                (isActive
                    ? "border-2 border-primary-500 text-primary-500 font-semibold focus:ring-primary-500 hover:bg-primary-500 hover:dark:bg-primary-500 "
                    : "text-light-500 dark:text-light-400 focus:ring-light-500 dark:focus:ring-light-400 hover:bg-light-500 dark:hover:bg-light-400 ") +
                "focus:dark:ring-offset-dark-eval-0 text-xl bg-white dark:bg-dark-eval-1 flex items-center justify-center w-12 h-12 focus:ring focus:ring-offset-2 hover:text-white dark:hover:text-dark-eval-0"
            }
            onClick={() => {
                if (onClick) onClick();
            }}
        >
            {children}
        </button>
    );
}

export default PaginationButton;
