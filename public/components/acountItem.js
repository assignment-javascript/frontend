export function createItem(item) {
    console.log("Adding item:", item);
    const resultsContainer = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = `Date: ${item.date}, Bank: ${item.bank}, Category: ${item.category}, Content: ${item.content}, Money: ${item.money}`;
    resultsContainer.appendChild(resultDiv);
}