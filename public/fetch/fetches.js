export async function monthlyViewRequest() {
    return {
        message: "success",
        data: {
            tatal: 10000,
            totalIncome: 100,
            totalexport: 100,
            items: [{
                date: "2024-07-31T12:34:56.789Z",
                bank: 100,
                category: 100,
                content: 100,
                money: 100
            },
            {
                date: "2025-07-31T12:34:56.789Z",
                bank: 100,
                category: 100,
                content: 100,
                money: 100
            },
            ]
        }
    }
}
