import { ReactNode } from "react";

interface MiniTagInterface {
    isActive?: boolean;
    icon?: ReactNode;
    name: string;
    onClick?: () => void;
}

function MiniTag({ name, onClick, icon, isActive = false }: MiniTagInterface) {
    return (
        <div
            className={
                (isActive
                    ? "border-2 border-accent-500 from-accent-700 to-accent-800 hover:from-dark-eval-2 hover:to-dark-eval-1 "
                    : "from-accent-500 to-accent-600 hover:from-accent-700 hover:to-accent-800 ") +
                "flex items-center text-xs px-2 py-1 rounded-full font-bold bg-gradient-to-br  focus:ring focus:ring-offset-2 focus:ring-accent-500"
            }
            onClick={(event) => {
                event.stopPropagation();

                if (onClick) onClick();
            }}
        >
            {icon}
            {name}
        </div>
    );
}

export default MiniTag;
