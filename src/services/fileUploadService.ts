import api from "./api";

/**
 * Envia um arquivo para o backend.
 * @param file O arquivo a ser enviado.
 * @param endpoint O endpoint de destino no backend (ex: '/upload').
 * @returns A resposta da API.
 */
export const uploadFileService = async (file: File, endpoint: string) => {
  const formData = new FormData();

  formData.append("file", file);

  try {
    const response = await api.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o arquivo:", error);
    throw error;
  }
};
