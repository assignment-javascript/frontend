// enroll.js
import { insertData } from "./fetch/fetches";

async function handleSubmit() {
    console.log("handleSubmit called"); // 디버깅 로그

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

    try {
        await insertData(newItem);
        createItem(newItem);

        const insertDataResponse = await insertData(newItem);
        insertDataResponse?.data?.items?.forEach(element => {
            createItem(element);
        });
    } catch (error) {
        console.error("Error occurred while submitting data:", error);
    }
}

// 버튼 클릭 시 handleSubmit 호출
document.getElementById('enrollSubmit').addEventListener('click', handleSubmit);
