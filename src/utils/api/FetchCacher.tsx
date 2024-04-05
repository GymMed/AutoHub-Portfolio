// import { projects } from "../../assets/fetched";

class FetchCacher {
    static prefix = "portfolio__";
    // stale data time 60 mins
    static renewDataTime = 60 * 60 * 1000;

    static async fetch(url: string) {
        const cachedData = localStorage.getItem(FetchCacher.prefix + url);
        let parsedData = [];

        if (cachedData) {
            parsedData = JSON.parse(cachedData);
            const dateDifference = Date.now() - parsedData.date;
            console.log(dateDifference, this.renewDataTime);

            if (dateDifference < FetchCacher.renewDataTime)
                return parsedData.data;
        }

        const promise = await fetch(url);
        const data = await promise.json();

        if (!promise.ok) {
            if (
                !(
                    !Array.isArray(data) &&
                    data.message &&
                    data.message === "Not Found"
                )
            ) {
                return [];
            }

            if (parsedData) return parsedData.data;
            // return data;
        }

        // const data = projects;

        const storeData = {
            date: Date.now(),
            data,
        };
        localStorage.setItem(
            FetchCacher.prefix + url,
            JSON.stringify(storeData)
        );
        return data;
    }
}

export { FetchCacher };
