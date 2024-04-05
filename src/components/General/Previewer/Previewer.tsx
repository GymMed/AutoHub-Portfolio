import { useState } from "react";
import { PREVIEW_TYPES_ENUM } from "../../../enums/PreviewTypesEnum";

interface PreviewerInterface {
    title: string;
    views: string[];
    viewType: PREVIEW_TYPES_ENUM;
}

interface PreviewDataInterface {
    activeIndex: number;
}

function Previewer({ title, views, viewType }: PreviewerInterface) {
    const [previewData, setPreviewData] = useState<PreviewDataInterface>({
        activeIndex: 0,
    });

    return (
        <div className="flex flex-col gap-5 p-3 rounded bg-white dark:bg-dark-eval-1 shadow-lg">
            <div>
                <img
                    className="container rounded"
                    src={views[previewData.activeIndex]}
                    alt="Selected item view"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col gap-3 ">
                <div className="text-light-500 dark:text-light-400 font-semibold">
                    {title}
                </div>
                <div className="p-2 shadow-inner rounded bg-light-200 dark:bg-dark-eval-0 flex gap-2">
                    {views.map((view, key) => {
                        return (
                            <div
                                className={
                                    (viewType === PREVIEW_TYPES_ENUM.Image &&
                                    key === previewData.activeIndex
                                        ? "bg-gradient-to-br from-primary-500 to-primary-700 "
                                        : "bg-white ") +
                                    "dark:bg-dark-eval-0 hover:bg-gradient-to-br cursor-pointer hover:from-primary-700 hover:to-primary-900 rounded"
                                }
                                onClick={() => {
                                    setPreviewData({
                                        activeIndex: key,
                                    });
                                }}
                            >
                                <div
                                    key={key}
                                    className="p-2 flex items-center"
                                >
                                    <img
                                        src={view}
                                        alt={
                                            (key === previewData.activeIndex
                                                ? "Selected "
                                                : "") + "Item View"
                                        }
                                        className="w-32 h-32 rounded object-contain"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Previewer;
