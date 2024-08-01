import { monthlyViewRequest } from "./fetch/monthlyViewFetch.js"
import { createList } from "./components/acountItem.js"

document.getElementById('monthPicker').addEventListener('change', onChangeMonth);

async function onChangeMonth(event) {
    const selectedMonth = event.target.value; // yyyy-MM
    const oldTbody = document.getElementById('results-tbody');
    const newTbody = oldTbody.cloneNode(false);
    oldTbody.replaceWith(newTbody);

    const response = await monthlyViewRequest(selectedMonth);
    createList(response);
}

