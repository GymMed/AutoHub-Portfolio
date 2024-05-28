import { useState } from "react";
import { PreviewerViewContainerInterface } from "../../../interfaces/PreviewerViewContainerInterface";

interface PreviewerInterface {
    views: PreviewerViewContainerInterface[];
}

interface PreviewDataInterface {
    activeIndex: number;
    activeViewPathIndex: number;
}

function Previewer({ views }: PreviewerInterface) {
    const [previewData, setPreviewData] = useState<PreviewDataInterface>({
        activeIndex: 0,
        activeViewPathIndex: 0,
    });

    return (
        <div className="flex flex-col gap-5 p-3 rounded bg-white dark:bg-dark-eval-1 shadow-lg">
            {views.length > 0 && (
                <>
                    <div className="p-2 rounded dark:bg-dark-eval-0 bg-light-200 shadow-inner">
                        <img
                            className="object-contain aspect-square container rounded"
                            src={
                                views[previewData.activeIndex].viewsPath[
                                    previewData.activeViewPathIndex
                                ]
                            }
                            alt="Selected item view"
                            loading="lazy"
                        />
                    </div>
                    {views.map((view, key) => {
                        return (
                            <div key={key} className="flex flex-col gap-3 ">
                                <div className="text-light-500 dark:text-light-400 font-semibold">
                                    {view.title}
                                </div>
                                <div className="p-2 shadow-inner rounded bg-light-200 dark:bg-dark-eval-0 gap-2 grid grid-cols-5">
                                    {view.viewsPath.map((path, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={
                                                    (key ===
                                                        previewData.activeIndex &&
                                                    index ===
                                                        previewData.activeViewPathIndex
                                                        ? "bg-gradient-to-br from-primary-500 to-primary-700 "
                                                        : "bg-white ") +
                                                    "dark:bg-dark-eval-0 hover:bg-gradient-to-br cursor-pointer hover:from-primary-700 hover:to-primary-900 rounded"
                                                }
                                                onClick={() => {
                                                    setPreviewData({
                                                        activeIndex: key,
                                                        activeViewPathIndex:
                                                            index,
                                                    });
                                                }}
                                            >
                                                <div
                                                    key={index}
                                                    className="p-2 flex items-center"
                                                >
                                                    <img
                                                        src={path}
                                                        alt={
                                                            (key ===
                                                                previewData.activeIndex &&
                                                            index ===
                                                                previewData.activeViewPathIndex
                                                                ? "Selected "
                                                                : "") +
                                                            "Item View"
                                                        }
                                                        className="rounded object-contain"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default Previewer;
