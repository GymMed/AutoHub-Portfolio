import { Children, ReactNode, useEffect, useRef, useState } from "react";
import CarouselControllers from "./CarouselControllers";

interface CarouselInterface {
    autoActive?: boolean;
    slideTime?: number;
    children: ReactNode;
}

function Carousel({
    autoActive = true,
    slideTime = 3000,
    children,
}: CarouselInterface) {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!autoActive) return;

        const interval = setInterval(() => {
            const childrenArray = Children.toArray(children);
            if (activeSlide === childrenArray.length - 1) {
                setActiveSlide(0);
                return;
            }
            setActiveSlide((previousActiveSlide) => previousActiveSlide + 1);
        }, slideTime);

        return () => {
            clearInterval(interval);
        };
    }, [autoActive, slideTime, activeSlide]);

    useEffect(() => {
        if (!carouselRef.current) return;

        // const childrenArray = Children.toArray(children);
        const activeSlideElement = carouselRef.current.children[
            activeSlide
        ] as HTMLElement;
        carouselRef.current.scrollTo({
            left: activeSlideElement.offsetLeft,
            behavior: "smooth",
        });
    }, [activeSlide, children]);

    return (
        <div className="w-full h-full">
            <div
                ref={carouselRef}
                className="relative h-full w-full overflow-y-hidden snap-x snap-mandatory flex overflow-x-scroll scroll-smooth [overflow:-moz-scrollbars-none] [scrollbar-width:none] [&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent"
            >
                {Children.toArray(children).map((value, key) => {
                    return (
                        <div
                            key={key}
                            className="w-full snap-center flex-shrink-0"
                        >
                            {value}
                        </div>
                    );
                })}
            </div>
            <CarouselControllers
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                totalSlides={Children.count(children)}
            />
        </div>
    );
}

export default Carousel;
