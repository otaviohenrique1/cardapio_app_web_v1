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

/* ApiCadastroCliente */
export interface ApiCadastroClienteTypes {
  nome: string;
  email: string;
  senha: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  data_cadastro: string;
  data_modificacao_cadastro: string;
}

export function ApiCadastroCliente(data_cadastro: ApiCadastroClienteTypes) {
  // api.post('cliente', data)
  return api.post('cliente', data_cadastro);
}

/* ApiEdicaoCliente */
export interface ApiEdicaoClienteTypes {
  id: string;
  nome: string;
  email: string;
  senha: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  data_modificacao_cadastro: string;
}

export function ApiEdicaoCliente(data_cadastro: ApiEdicaoClienteTypes) {
  // api.put(`cliente/${id}`, data)
  return api.put(`cliente/${data_cadastro.id}`, data_cadastro);
}

/* ApiBuscaDadosUmCliente */
export function ApiBuscaDadosUmCliente(id: string) {
  // api.get(`usuario/${id}`)
  return api.get(`cliente/${id}`);
}

/* ApiBuscaDadosUmaRefeicao */
export function ApiBuscaDadosUmaRefeicao(id: string) {
  // api.get(`usuario/${id}`)
  return api.get(`refeicao/${id}`);
}

/* ApiBuscaDadosTodasRefeicoes */
export function ApiBuscaDadosTodasRefeicoes(id: string) {
  // api.get(`refeicao/cardapio/${valida_id}`)
  return api.get(`refeicao/cardapio/${id}`);
}

















/* ApiBuscaLoginCliente */
export interface ApiBuscaLoginClienteTypes {
  data: { email: string; senha: string; };
  auth: { username: string; password: string; };
}

export function ApiBuscaLoginCliente(data_login: ApiBuscaLoginClienteTypes) {
  // api.post('cliente/login', data, auth)
  const { data, auth } = data_login;
  return api.post('cliente/login', data, { auth });
}