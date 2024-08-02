import { DOMAIN_URL, objectToQueryParams, fetchData } from "./fetch.js"

export async function monthlyReportRequest(date) {
    try {
        const url = DOMAIN_URL + '/report?' + objectToQueryParams({ date })
        const resultObject = await fetchData(url, {});
        return resultObject.data;
    } catch (error) {
        alert('요청에 실패했습니다:' + error);
        return null;
    }

}