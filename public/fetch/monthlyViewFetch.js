import { fetchData } from "./fetch.js"

export async function monthlyViewRequest(date) {
    const resultObject = await fetchData(`http://localhost:8080/?date=${date}`, {});

    return resultObject.data;

}