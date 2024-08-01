import { fetchData } from "./fetch.js"

export async function monthlyViewRequest(date, ie) {
    const params = {
        date
    }
    if (ie != 'A') {
        params.ie = ie;
    }

    const url = new URL(`http://localhost:8080`);
    url.search = new URLSearchParams(params);

    const resultObject = await fetchData(url, {});

    return resultObject.data;
}