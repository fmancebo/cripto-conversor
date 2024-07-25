import axios from "axios";

// Cria uma instância do Axios com a URL base definida no .env
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Função para buscar preços de criptomoedas
export const getCryptoPrice = async (cryptoId, currencies = "usd,brl") => {
  try {
    // Construa a URL com parâmetros dinamicamente
    const response = await api.get("", {
      // Use o endpoint base sem path adicional
      params: {
        ids: cryptoId,
        vs_currencies: currencies,
      },
    });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Erro ao buscar preços:", error);
    throw error;
  }
};

export default api;
