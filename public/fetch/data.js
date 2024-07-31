import { fetchData } from "./fetch.js"

export async function monthlyViewRequest() {
    // const resultJSON = await fetchData("http://172.29.12.159:8080/", {});
    // resultObject = JSON.parse(resultJSON);
    // return resultObject;

    return {
        message: "success",
        data: {
            tatal: 10000,
            totalIncome: 100,
            totalexport: 100,
            items: [{
                date: "2024-07-31T12:34:56.789Z",
                bank: 1010,
                category: 1020,
                content: 1030,
                money: 1040
            },
            {
                date: "2025-07-31T12:34:56.789Z",
                bank: 1050,
                category: 1006,
                content: 1070,
                money: 1080
            },
            ]
        }
    }
}