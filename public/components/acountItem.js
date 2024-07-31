
export function createItem() {
    console.log("items");
    const resultsContainer = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = `아이템`;
    resultsContainer.appendChild(resultDiv);
}