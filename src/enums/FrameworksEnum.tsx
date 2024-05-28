export enum FRAMEWORKS_ENUM {
    Qt,
    Laravel,
    Expressjs,
    Livewire,
    Alpinejs,
    React,
    Vue,
    Tailwind,
    Bootstrap,
    AndroidStudio,
    NetWinForms,
    ejs,
    chartjs,
}

export const FrameworksNames = [
    "Qt",
    "Laravel",
    "Express js",
    "Livewire",
    "Alpine js",
    "React",
    "Vue",
    "Tailwind",
    "Bootstrap",
    "Android Studio",
    "Win Forms",
    "Ejs",
    "Chart js",
];

//if array is empty searches in frameworksNames
//every string is transformed to lowercase when
//comparing
export const FrameworksSearchArrays = [
    [],
    [],
    ["Expressjs"],
    [],
    ["Alpinejs"],
    [],
    [],
    ["Tailwind", "Tailwindcss"],
    ["Bootstrap", "Bootstrap5"],
    ["AndroidStudio"],
    ["WinForms"],
    [],
    ["Chartjs"],
];
