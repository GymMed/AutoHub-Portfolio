// function getLastSplitElement(sentance: string, separator = "/") {
//     const elements = sentance.split(separator);
//     return elements[elements.length - 1];
// }

class ImageImporter {
    //import.meta.glob(`../assets/images/BIT-React-People-Recall/*.{jpg,jpeg,png,svg}`);
    static async importImages(
        imageFiles: Record<string, () => Promise<unknown>>
    ) {
        // const images: Record<string, string> = {};
        const images = [];

        // Loop through image files and import them dynamically
        for (const path in imageFiles) {
            const image = await imageFiles[path]();

            if (!image || !(typeof image === "object" && "default" in image))
                continue;
            images.push(image.default);
            // const fullName = getLastSplitElement(path, "/");
            // const extension = getLastSplitElement(path, ".");
            // const name = fullName.substring(
            //     0,
            //     fullName.length - (extension.length + 1)
            // );

            // images[name] = image.default;
        }

        return images as string[];
    }
}

export default ImageImporter;
