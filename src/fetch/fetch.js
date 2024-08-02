export async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        alert('요청에 실패했습니다.')
        return null;
    }
}

export async function insertData(item) {
    try {
        console.log("Inserting data:", item);

        // Fetch 요청을 사용하여 데이터를 서버에 전송합니다.
        const response = await fetch('http://localhost:8080/income', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });

        // 응답이 성공적이면 알림을 표시합니다.
        if (response.ok) {
            alert("등록에 성공하였습니다");
            return await response.json(); // 응답 데이터를 반환합니다.
        } else {
            // 서버가 에러를 반환할 경우 에러 메시지를 표시합니다.
            const errorMessage = await response.text();
            alert(`등록에 실패하였습니다: ${errorMessage}`);
            return null;
        }
    } catch (error) {
        // 네트워크 오류 등의 예외 상황을 처리합니다.
        console.error('Failed to fetch data:', error);
        alert('요청에 실패했습니다.');
        return null;
    }
}
