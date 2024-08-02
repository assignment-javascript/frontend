import { fetchData } from "./fetch.js"

export async function monthlyViewRequest(date) {
    console.log("date",date);
    const resultObject = await fetchData(`http://localhost:8080/?date=${date}`, {});

    return resultObject.data;

}