import { DOMAIN_URL, objectToQueryParams, fetchData } from "./fetch.js"

export async function monthlyViewRequest(date, ie) {
    const params = {
        date
    }
    if (ie != 'A') {
        params.ie = ie;
    }

    const url = DOMAIN_URL + '?' + objectToQueryParams(params)
    const resultObject = await fetchData(url, {});

    return resultObject.data;
}