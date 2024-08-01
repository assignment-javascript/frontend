import { fetchData } from "./fetch.js"

export async function monthlyReportRequest(date) {
    const resultObject = await fetchData(`http://localhost:8080/report?date=${date}`, {});
    return resultObject.data;
}