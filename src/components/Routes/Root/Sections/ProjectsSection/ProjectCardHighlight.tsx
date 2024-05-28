function ProjectCardHighlight() {
    return (
        <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 w-full flex items-center justify-center">
            <div className="group-hover/card:w-full w-0 my-2 bg-primary-500 h-1 rounded-full transform duration-700"></div>
        </div>
    );
}

export default ProjectCardHighlight;
