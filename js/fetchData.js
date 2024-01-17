
// fetchData.js

export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error; // Propagar o erro para quem chama a função
    }
}

