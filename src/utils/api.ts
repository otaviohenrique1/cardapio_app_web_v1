import axios from "axios";

/**
 * Arrumar logica do ID da empresa cliente.
 * ID pego no banco de dados
 */
export const id_empresa_cliente = '1';

const api = axios.create({
  baseURL: 'http://localhost:3333/'
});

export default api;
