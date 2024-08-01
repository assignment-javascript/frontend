
export function createReport(reportData) {
    const monthDiv = document.getElementById('results-month');
    monthDiv.textContent = reportData.date;

    // container 생성
    const resultContainer = document.getElementById('results-container');
    const newResultContainer = resultContainer.cloneNode(false);

    // total 데이터
    newResultContainer.appendChild(createLiUI("총 소비", reportData.total.total_expense ?? 0));
    newResultContainer.appendChild(createLiUI("총 소득", reportData.total.total_income ?? 0));
    newResultContainer.appendChild(createLiUI("총 이윤", reportData.total.total_profit ?? 0));

    // category 데이터
    const category = document.createElement("h3");
    category.textContent = "카테고리별 비용";
    newResultContainer.appendChild(category);

    // category items 데이터
    if (reportData.items.Length) {
        reportData.items.forEach((item) => {
            newResultContainer.appendChild(createLiUI(item.category, item.total_expense));
        });
    } else {
        const category = document.createElement("li");
        category.textContent = "내용 없음";
        newResultContainer.appendChild(category);
    }

    // 기존 것과 교체
    resultContainer.replaceWith(newResultContainer);
}

// util, li 생성
function createLiUI(key, value) {
    const itemContainer = document.createElement('li');
    itemContainer.classList.add("report-li");

    const itemKey = document.createElement('div');
    itemKey.textContent = key;

    const itemValue = document.createElement('div');
    itemValue.textContent = value;
    itemContainer.appendChild(itemKey);
    itemContainer.appendChild(itemValue);

    return itemContainer;
}