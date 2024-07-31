export function createList(itemsData) {
    const tbody = document.getElementById('results-tbody');

    itemsData.forEach(item => {
        const row = document.createElement('tr');

        const checkboxTd = createElement('td', null, {}, 'checkbox-td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkboxTd.appendChild(checkbox);
        row.appendChild(checkboxTd);

        if (item.ie === "I") {
            row.classList.add('type-i');
        }
        if (item.ie === "E") {
            row.classList.add('type-e');
        }

        row.appendChild(createElement('td', 'date', item));
        row.appendChild(createElement('td', 'bank', item));
        row.appendChild(createElement('td', 'category', item));
        row.appendChild(createElement('td', 'content', item));
        row.appendChild(createElement('td', 'money', item, 'money'));

        tbody.appendChild(row);
    });
}

export function createItem() {
    const resultsContainer = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = `아이템`;
    resultsContainer.appendChild(resultDiv);
}

function createElement(tagName, key, item, ...classNames) {
    const element = document.createElement(tagName);
    if (key) {
        element.textContent = item[key]; // key를 사용하여 객체의 속성에 접근
    }
    classNames.forEach(className => element.classList.add(className)); // 클래스 추가
    return element;
}
