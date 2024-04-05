interface HeaderInterface {
    text: string;
}

function Header({ text }: HeaderInterface) {
    return (
        <div className="p-5 text-light-500 dark:text-light-400 font-semibold text-2xl bg-white dark:bg-dark-eval-1 shadow-lg flex justify-between">
            <div>{text}</div>
            <div></div>
        </div>
    );
}

export default Header;
