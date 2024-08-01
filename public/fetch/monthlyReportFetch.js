import { fetchData } from "./fetch.js"

export async function monthlyReportRequest(date) {
    const resultObject = await fetchData(`/report?date=${date}`, {});
    return resultObject.data;
}