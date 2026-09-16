export const Fetcher = async (url) => {
    const resposta = await fetch(url);
    if (!resposta.ok) {
        throw new Error(`Erro ao buscar dados na API`);
    }
    return resposta.json();
}