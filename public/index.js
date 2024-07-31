import { monthlyViewRequest } from "./fetch/data.js"
import { createList } from "./components/acountItem.js"

const response = await monthlyViewRequest();
createList(response?.data?.items);