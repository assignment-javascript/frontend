import { monthlyViewRequest } from "./fetch/fetches.js"
import { createItem } from "./components/acountItem.js"

const response = await monthlyViewRequest();
console.log(response);
response?.data?.items?.forEach(element => {
    createItem();
});