import { DOMAIN_URL, fetchData } from "./fetch.js"

export async function incomeFetch(item) {
    try {
        console.log("Inserting data:", item);
        const url = DOMAIN_URL + '/income';
        const response = await fetchData(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });

        alert("등록에 성공하였습니다");
        return response; // 응답 데이터를 반환합니다.
    } catch (error) {
        // 네트워크 오류 등의 예외 상황을 처리합니다.
        console.error('Failed to fetch data:', error);
        alert('등록에 실패했습니다.');
        return null;
    }
}