

export function createList(itemsData) {
    const resultsContainer = document.getElementById('results');

    itemsData.forEach(item => {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = item?.date;
        resultsContainer.appendChild(dateDiv);
        const bankDiv = document.createElement('div');
        bankDiv.textContent = item?.bank;
        resultsContainer.appendChild(bankDiv);
        const categoryDiv = document.createElement('div');
        categoryDiv.textContent = item?.category;
        resultsContainer.appendChild(categoryDiv);
        const contentDiv = document.createElement('div');
        contentDiv.textContent = item?.content;
        resultsContainer.appendChild(contentDiv);
        const moneyDiv = document.createElement('div');
        moneyDiv.textContent = item?.money;
        resultsContainer.appendChild(moneyDiv);
    })
}

export function createItem() {
    const resultsContainer = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = `아이템`;
    resultsContainer.appendChild(resultDiv);
}