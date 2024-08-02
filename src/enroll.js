import { incomeFetch } from "./fetch/incomeFetch.js";
function formatDateToYearMonth(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    // 월을 두 자리로 만들기 위해 padStart를 사용
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
}

async function handleSubmit() {
    console.log("handleSubmit called");

    const dateInput = document.getElementById('date').value;
    const bank = document.getElementById('bank').value;
    const category = document.getElementById('category').value;
    const money = document.getElementById('money').value;
    const content = document.getElementById('content').value;
    const memo = document.getElementById('memo').value;
    const ie = document.getElementById('ie').value;

    // 입력된 날짜를 한국 시간으로 변환
    const date = new Date(dateInput);
    const utcDate = date.getTime() + (date.getTimezoneOffset() * 6000);
    const kstDate = new Date(utcDate + (3600000 * 9)); // UTC+9 시간대

    const formattedDate = kstDate.toISOString().slice(0, 19).replace('T', ' ');

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
        await incomeFetch(newItem);
        // `newItem.date`에서 `YYYY-MM` 형식으로 변환
        const yearMonth = formatDateToYearMonth(newItem.date);
         // monthPicker의 값을 업데이트
        const monthPicker = document.getElementById("monthPicker");
        monthPicker.value = yearMonth;

        const event = new Event('change', { bubbles: true });
        monthPicker.dispatchEvent(event);

    } catch (error) {
        console.error("Error occurred while submitting data:", error);
    }
}

// 버튼 클릭 시 handleSubmit 호출
document.getElementById('enrollSubmit').addEventListener('click', handleSubmit);