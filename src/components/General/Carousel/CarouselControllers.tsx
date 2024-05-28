import LeftIcon from "../../../assets/icons/Left.svg";
import RightIcon from "../../../assets/icons/Right.svg";

interface CarouselControllersInterface {
    activeSlide: number;
    setActiveSlide: (activeSlide: number) => void;
    totalSlides: number;
}

function CarouselControllers({
    activeSlide,
    setActiveSlide,
    totalSlides,
}: CarouselControllersInterface) {
    return (
        <div className="pointer-events-none absolute top-0 h-full w-full flex items-center justify-between">
            <button
                type="button"
                className="p-5 pointer-events-auto h-full flex items-center justify-center text-light-700 dark:text-light-600 hover:text-white hover:dark:text-white"
                onClick={() => {
                    if (activeSlide < 1) {
                        setActiveSlide(totalSlides - 1);
                        return;
                    }
                    setActiveSlide(activeSlide - 1);
                }}
            >
                <LeftIcon className="w-6 h-6 transition-colors duration-1000" />
            </button>
            <div className="caret-transparent pointer-events-auto self-end p-5 flex items-center justify-center gap-3">
                {totalSlides > 0 &&
                    [...Array(totalSlides)].map((value, key) => {
                        return (
                            <div
                                key={key}
                                className={
                                    (activeSlide === key
                                        ? "bg-light-200 dark:bg-light-300 "
                                        : "bg-light-700 dark:bg-light-600 hover:bg-light-500 hover:dark:bg-light-400 ") +
                                    "cursor-pointer w-6 h-6 rounded-full transition-colors duration-500"
                                }
                                onClick={() => {
                                    setActiveSlide(key);
                                }}
                            ></div>
                        );
                    })}
            </div>
            <button
                type="button"
                className="p-5 pointer-events-auto h-full flex items-center justify-center text-light-700 dark:text-light-600 hover:text-white hover:dark:text-white"
                onClick={() => {
                    if (activeSlide < totalSlides - 1) {
                        setActiveSlide(activeSlide + 1);
                        return;
                    }
                    setActiveSlide(0);
                }}
            >
                <RightIcon className="w-6 h-6 transition-colors duration-1000" />
            </button>
        </div>
    );
}

export default CarouselControllers;
