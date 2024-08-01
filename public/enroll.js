import { insertData } from "./fetch/fetch.js";
import { monthlyViewRequest } from "./fetch/monthlyViewFetch.js";
import { createList } from "./components/acountItem.js";

async function handleSubmit() {
    console.log("handleSubmit called"); 

    const dateInput = document.getElementById('date').value;
    const bank = document.getElementById('bank').value;
    const category = document.getElementById('category').value;
    const money = document.getElementById('money').value;
    const content = document.getElementById('content').value;
    const memo = document.getElementById('memo').value;
    const ie = document.getElementById('ie').value;

    const date = new Date(dateInput);
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
    const newItem = {
        date: formattedDate,
        bank: bank,
        category: category,
        money: parseFloat(money),
        content: content,
        memo: memo,
        ie: ie
    };

    try {
        await insertData(newItem);
        // `newItem.date`에서 `YYYY-MM` 형식으로 변환
        const itemDate = new Date(newItem.date);
        const yearMonth = itemDate.toISOString().slice(0, 7); // 'YYYY-MM' 형식으로 변환

        // monthPicker의 값을 업데이트
        const monthControl = document.querySelector('input[type="month"]');
        monthControl.value = yearMonth;

        // onChangeMonth 함수 호출하여 리스트 갱신
        const event = { target: { value: yearMonth } }; // Mock event 객체
        await onChangeMonth(event);
    } catch (error) {
        console.error("Error occurred while submitting data:", error);
    }
}

// 버튼 클릭 시 handleSubmit 호출
document.getElementById('enrollSubmit').addEventListener('click', handleSubmit);
