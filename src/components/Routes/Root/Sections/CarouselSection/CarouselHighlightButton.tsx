interface CarouselHighlightButtonInterface {
    onClick: () => void;
    text: string;
}

function CarouselHightlightButton({
    onClick,
    text,
}: CarouselHighlightButtonInterface) {
    return (
        <button
            type="button"
            className="rounded text-lg focus:ring focus:ring-offset-2 focus:ring-offset-sections-profile focus:ring-accent-500 from-accent-500 to-accent-700 hover:from-accent-700 hover:to-accent-900 text-white font-semibold bg-gradient-to-br tracking-wide"
            onClick={onClick}
        >
            <div className="hover:scale-105 px-4 py-1">{text}</div>
        </button>
    );
}

export default CarouselHightlightButton;
