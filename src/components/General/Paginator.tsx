import PaginationButton from "./PaginationButton";
import LeftSvg from "../../assets/icons/Left.svg";
import RightSvg from "../../assets/icons/Right.svg";
import { PaginationDataInterface } from "../../interfaces/Pagination/PaginationDataInterface";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface PaginatorInterface {
    paginationData: PaginationDataInterface;
    setPaginationData: (data: PaginationDataInterface) => void;
    totalPaginationLinksForSide: number;
    totalPages: number;
}

function Paginator({
    paginationData,
    setPaginationData,
    totalPaginationLinksForSide,
    totalPages,
}: PaginatorInterface) {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (paginationData.activePage === 0) {
            searchParams.delete("page");
            setSearchParams(searchParams);
            return;
        }

        searchParams.set("page", (paginationData.activePage + 1).toString());
        setSearchParams(searchParams);
    }, [paginationData]);

    const scrollType: ScrollBehavior = "smooth";
    const scrollOptions = { behavior: scrollType, top: 0 };

    function getLeftSide() {
        if (paginationData.activePage < totalPaginationLinksForSide) {
            return paginationData.activePage;
        }

        return totalPaginationLinksForSide;
    }

    const leftSide = getLeftSide();

    function getRightSide(leftSide: number) {
        if (totalPages === 0) return 0;

        const totalPageSteps =
            totalPaginationLinksForSide +
            (totalPaginationLinksForSide - leftSide);

        //+1 cuz shown from 1 and totalPages is ceil but array starts 0
        const activePage = paginationData.activePage + 1;
        if (activePage + totalPageSteps > totalPages) {
            return totalPages - activePage;
        }

        return totalPageSteps;
    }
    const rightSide = getRightSide(leftSide);

    // const RightToLeft = leftSide + (totalPaginationLinksForSide - rightSide);
    // const addedRightToLeftSide = RightToLeft > -1 ? RightToLeft : 0;

    function getAddedValues(rightSide: number, leftSide: number) {
        if (leftSide >= totalPaginationLinksForSide) {
            const result = leftSide + (totalPaginationLinksForSide - rightSide);
            if (result > totalPages - paginationData.activePage)
                return paginationData.activePage;
            return result;
        }
        return leftSide;
    }
    const addedRightToLeftSide = getAddedValues(rightSide, leftSide);

    return (
        <div className="w-full flex gap-3 items-center justify-center mb-7">
            {addedRightToLeftSide > 0 && (
                <PaginationButton
                    isRounded={true}
                    onClick={() => {
                        setPaginationData({
                            ...paginationData,
                            activePage:
                                paginationData.activePage > 0
                                    ? paginationData.activePage - 1
                                    : 0,
                        });

                        window.scrollTo(scrollOptions);
                    }}
                >
                    <LeftSvg className="w-6 h-6" />
                </PaginationButton>
            )}
            {addedRightToLeftSide > 0 &&
                [...Array(addedRightToLeftSide)].map((value, key) => {
                    return (
                        <PaginationButton
                            key={key}
                            onClick={() => {
                                setPaginationData({
                                    ...paginationData,
                                    activePage:
                                        paginationData.activePage -
                                        addedRightToLeftSide +
                                        key,
                                });

                                window.scrollTo(scrollOptions);
                            }}
                        >
                            {paginationData.activePage -
                                addedRightToLeftSide +
                                key +
                                1}
                        </PaginationButton>
                    );
                })}
            <PaginationButton isActive={true}>
                {paginationData?.activePage
                    ? paginationData?.activePage + 1
                    : 1}
            </PaginationButton>
            {rightSide > -1 &&
                [...Array(rightSide)].map((value, key) => {
                    return (
                        <PaginationButton
                            key={key}
                            onClick={() => {
                                setPaginationData({
                                    ...paginationData,
                                    activePage:
                                        key + paginationData.activePage + 1,
                                });

                                window.scrollTo(scrollOptions);
                            }}
                        >
                            {key + paginationData.activePage + 2}
                        </PaginationButton>
                    );
                })}
            {rightSide > 0 && (
                <PaginationButton
                    isRounded={true}
                    onClick={() => {
                        setPaginationData({
                            ...paginationData,
                            activePage:
                                paginationData.activePage + 1 >= totalPages
                                    ? paginationData.activePage
                                    : paginationData.activePage + 1,
                        });

                        window.scrollTo(scrollOptions);
                    }}
                >
                    <RightSvg className="w-6 h-6" />
                </PaginationButton>
            )}
        </div>
    );
}

export default Paginator;
