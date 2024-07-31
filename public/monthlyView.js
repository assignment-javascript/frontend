import { monthlyViewRequest } from "./fetch/monthlyViewFetch.js"
import { createList } from "./components/acountItem.js"

document.getElementById('monthPicker').addEventListener('change', onChangeMonth);

async function onChangeMonth(event) {
    const selectedMonth = event.target.value; // yyyy-MM
    const oldTbody = document.getElementById('results-tbody');
    const newTbody = document.createElement('tbody');
    newTbody.id = 'results-tbody';
    oldTbody.parentNode.replaceChild(newTbody, oldTbody);

    const response = await monthlyViewRequest(selectedMonth);
    createList(response);
}

