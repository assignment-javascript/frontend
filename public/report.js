import { monthlyReportRequest } from "./fetch/monthlyReportFetch.js"
import { createReport } from './components/reportUI.js'

document.getElementById('monthPicker').addEventListener('change', onChangeMonth);

async function onChangeMonth(event) {
    const selectedMonth = event.target.value; // 달 변경 데이터: yyyy-MM
    const response = await monthlyReportRequest(selectedMonth);
    createReport(response);
}
