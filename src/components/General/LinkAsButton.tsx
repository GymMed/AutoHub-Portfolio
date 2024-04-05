import { Link } from "react-router-dom";
import { STATUS_ENUM } from "../../enums/StatusManager";

function getClassesBasedOnStatus(status: STATUS_ENUM): string {
    switch (status) {
        case STATUS_ENUM.Success:
            return "from-green-500 to-green-700 hover:from-green-700 hover:bg-green-900 focus:ring-green-500";
        case STATUS_ENUM.Error:
            return "from-red-500 to-red-700 hover:from-red-700 hover:bg-red-900 focus:ring-red-500";
        case STATUS_ENUM.Warning:
            return "from-yellow-500 to-yellow-700 hover:from-yellow-700 hover:bg-yellow-900 focus:ring-yellow-500";
        case STATUS_ENUM.Information:
        default:
            return "from-blue-500 to-blue-700 hover:from-blue-700 hover:bg-blue-900 focus:ring-blue-500";
    }
}

interface LinkAsButtonInterface {
    text: string;
    status: STATUS_ENUM;
    href: string;
}

function LinkAsButton({ text, status, href }: LinkAsButtonInterface) {
    return (
        <Link
            className={
                getClassesBasedOnStatus(status) +
                " px-4 py-1.5 rounded shadow text-white font-semibold bg-gradient-to-br focus:ring focus:ring-offset-2"
            }
            to={href}
        >
            {text}
        </Link>
    );
}

export default LinkAsButton;
