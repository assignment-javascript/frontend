// index.js

import { monthlyViewRequest, insertData } from "./fetch/fetches.js";
import { createItem } from "./components/acountItem.js";

document.addEventListener("DOMContentLoaded", async () => {
    const response = await monthlyViewRequest();
    console.log(response);
    response?.data?.items?.forEach(element => {
        createItem(element);
    });

    // handleSubmit 함수 정의
    async function handleSubmit() {
        const date = document.getElementById('date').value;
        const bank = document.getElementById('bank').value;
        const category = document.getElementById('category').value;
        const money = document.getElementById('money').value;
        const content = document.getElementById('content').value;
        const memo = document.getElementById('memo').value;
        const ie = document.getElementById('ie').value;

        const newItem = {
            date: new Date(date).toISOString(),
            bank: bank,
            category: category,
            money: parseFloat(money),
            content: content,
            memo: memo,
            ie: ie
        };

        await insertData(newItem);
        createItem(newItem);

        const insertDataResponse = await insertData(newItem);
        console.log(insertDataResponse);
        insertDataResponse?.data?.items?.forEach(element => {
            createItem(element);
        });
    }

    // handleSubmit 함수를 전역에서 접근 가능하도록 설정
    window.handleSubmit = handleSubmit;
});
