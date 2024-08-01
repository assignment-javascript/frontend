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
        await fetch('http://localhost:8080/income', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    } catch (error) {
        console.error('Failed to fetch data:', error);
        alert('요청에 실패했습니다.')
        return null;
    }
    
}
