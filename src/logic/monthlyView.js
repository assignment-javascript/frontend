import { monthlyViewRequest } from "../fetch/monthlyViewFetch.js";
import { createList } from "../components/acountItem.js";

// Ref Container
function setRef(monthPicker, options) {
    return {
        monthPicker, options
    };
}

// 폼 변경 인지
const form = document.getElementById('filter-form');
const formRefs = setRef(document.getElementById('monthPicker'), document.getElementById('options'));

form.addEventListener('change', () => {
    onChangeMonth(formRefs.monthPicker.value, formRefs.options.value);
});

// 변경이벤트 후 Ref교체
async function onChangeMonth(date, ie) {
    const response = await monthlyViewRequest(date, ie);
    const oldTbody = document.getElementById('results-tbody');
    const newTbody = oldTbody.cloneNode(false);
    createList(newTbody, response);

    oldTbody.replaceWith(newTbody);
}
