export const DOMAIN_URL = "http://172.29.12.159:8080";

// fetch, tryCatch로 싸줘야함
export async function fetchData(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export async function defaultErrorBoundary(fetchFunction) {
    try {
        return await fetchFunction();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        const errorMessage = await response.text();
        alert(`요청에 실패했습니다.: ${errorMessage}`);
        return null;
    }
}

// 쿼리를 
export function objectToQueryParams(obj) {
    return Object.entries(obj)
        .map(([key, value]) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join('&');
}


