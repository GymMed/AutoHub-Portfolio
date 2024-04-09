// import { projects } from "../../assets/fetched";

interface CachedDataInterface {
    date: number;
    data: object;
}

interface PromisesDataInterface {
    promise: Promise<Response>;
    parsedData: CachedDataInterface;
    url: string;
}

class FetchCacher {
    static prefix = "portfolio__";
    // stale data time 60 mins
    static renewDataTime = 60 * 60 * 1000;

    static getPromisesOrCachedData(urls: string[]) {
        const outputData = [];
        const promisesData: PromisesDataInterface[] = [];

        for (let currentUrl = 0; currentUrl < urls.length; currentUrl++) {
            const parsedData = FetchCacher.getStoredData(urls[currentUrl]);
            const cachedData = FetchCacher.getCachedData(parsedData);

            if (cachedData) {
                outputData.push(cachedData);
                continue;
            }

            promisesData.push({
                promise: fetch(urls[currentUrl]),
                parsedData,
                url: urls[currentUrl],
            });
        }

        return { outputData, promisesData };
    }

    static async multipleFetches(urls: string[]) {
        const {
            outputData,
            promisesData,
        }: { outputData: any; promisesData: PromisesDataInterface[] } =
            FetchCacher.getPromisesOrCachedData(urls);

        const allPromises = await Promise.all(
            promisesData.map((promiseData) => promiseData.promise)
        );
        const jsons = await Promise.all(
            allPromises.map((promise) => {
                return promise.json();
            })
        );

        for (
            let currentPromise = 0;
            currentPromise < allPromises.length;
            currentPromise++
        ) {
            const data = jsons[currentPromise];

            if (!allPromises[currentPromise].ok) {
                if (
                    !(
                        !Array.isArray(data) &&
                        data.message &&
                        data.message === "Not Found"
                    )
                ) {
                    continue;
                }

                if (promisesData[currentPromise].parsedData) {
                    outputData.push(
                        promisesData[currentPromise].parsedData.data
                    );

                    continue;
                }
            }

            const storeData: CachedDataInterface = {
                date: Date.now(),
                data,
            };
            localStorage.setItem(
                FetchCacher.prefix + promisesData[currentPromise].url,
                JSON.stringify(storeData)
            );

            outputData.push(data);
        }

        return outputData;
    }

    static async fetch(url: string) {
        const parsedData = FetchCacher.getStoredData(url);
        const cachedData = FetchCacher.getCachedData(parsedData);

        if (cachedData) return cachedData;

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

        const storeData: CachedDataInterface = {
            date: Date.now(),
            data,
        };
        localStorage.setItem(
            FetchCacher.prefix + url,
            JSON.stringify(storeData)
        );
        return data;
    }

    static getStoredData(url: string) {
        const cachedData = localStorage.getItem(FetchCacher.prefix + url);
        let parsedData = [];

        if (cachedData) {
            parsedData = JSON.parse(cachedData);
            return parsedData;
        }

        return null;
    }

    static getCachedData(parsedData: CachedDataInterface): null | object {
        if (!parsedData) return null;

        const dateDifference = Date.now() - parsedData.date;
        console.log(dateDifference, this.renewDataTime);

        if (dateDifference < FetchCacher.renewDataTime) return parsedData.data;
        return null;
    }
}

export { FetchCacher };
