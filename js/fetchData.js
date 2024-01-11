

export async function data() {
    const url = "http://localhost:3000/locais";

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    await fetchData(url);
}
