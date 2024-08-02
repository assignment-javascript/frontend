import { monthlyViewRequest } from "./fetch/monthlyViewFetch.js"
import { createList } from "./components/acountItem.js"

document.getElementById('monthPicker').addEventListener('change', onChangeMonth);

const form = document.getElementById('filter-form');

form.addEventListener('change', (event) => {
    const monthElement = document.getElementById('monthPicker');
    const selectElement = document.getElementById('options');

    onChangeMonth(monthElement.value, selectElement.value);
});


async function onChangeMonth(date, ie) {
    const oldTbody = document.getElementById('results-tbody');
    const newTbody = oldTbody.cloneNode(false);
    oldTbody.replaceWith(newTbody);

    const response = await monthlyViewRequest(date, ie);
    createList(response);
}

