interface MiniTagInterface {
    framework: string;
    onClick?: () => void;
}

function MiniTag({ framework, onClick }: MiniTagInterface) {
    return (
        <div
            className="text-xs px-2 py-1 rounded-full font-bold bg-gradient-to-br from-accent-500 to-accent-600 hover:from-accent-700 hover:to-accent-800 focus:ring focus:ring-offset-2 focus:ring-accent-500"
            onClick={() => {
                if (onClick) onClick;
            }}
        >
            {framework}
        </div>
    );
}

export default MiniTag;
