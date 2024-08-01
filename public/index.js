import { monthlyViewRequest } from "./fetch/data.js"
import { createList } from "./components/accountItem.js";

const response = await monthlyViewRequest();
createList(response?.data?.items);