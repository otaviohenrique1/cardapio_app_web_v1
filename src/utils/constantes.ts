export const EMAIL_INVALIDO = "Email invalido";
export const valor_minimo_carateres = 8;
export const MINIMO_CARACTERES = `Minimo ${valor_minimo_carateres} carateres`;
export const valor_maximo_carateres = 64;
export const MAXIMO_CARACTERES = `Maximo ${valor_maximo_carateres} carateres`;
export const valor_minimo_ingredientes = 1;
export const MINIMO_INGREDIENTES = `Minimo ${valor_minimo_ingredientes} carateres`;

export const FORMATO_HORA_1 = 'HH:mm';
export const FORMATO_HORA_2 = 'HH:mm:ss';
export const FORMATO_DATA_1 = 'dd/MM/yyyy';
export const FORMATO_DATA_2 = 'yyyy-MM-dd';
export const FORMATO_DATA_COM_HORA_1 = 'yyyy-MM-dd HH:mm';
export const FORMATO_DATA_COM_HORA_2 = 'dd/MM/yyyy HH:mm';
export const FORMATO_DATA_COM_HORA_3 = 'yyyy-MM-dd HH:mm:ss';
export const FORMATO_DATA_COM_HORA_4 = 'dd/MM/yyyy HH:mm:ss';

export const lista_estados = [
  { valor: "AC", texto: "Acre" },
  { valor: "AL", texto: "Alagoas" },
  { valor: "AP", texto: "Amapá" },
  { valor: "AM", texto: "Amazonas" },
  { valor: "BA", texto: "Bahia" },
  { valor: "CE", texto: "Ceará" },
  { valor: "DF", texto: "Distrito Federal" },
  { valor: "ES", texto: "Espírito Santo" },
  { valor: "GO", texto: "Goiás" },
  { valor: "MA", texto: "Maranhão" },
  { valor: "MT", texto: "Mato Grosso" },
  { valor: "MS", texto: "Mato Grosso do Sul" },
  { valor: "MG", texto: "Minas Gerais" },
  { valor: "PA", texto: "Pará" },
  { valor: "PB", texto: "Paraíba" },
  { valor: "PR", texto: "Paraná" },
  { valor: "PE", texto: "Pernambuco" },
  { valor: "PI", texto: "Piauí" },
  { valor: "RJ", texto: "Rio de Janeiro" },
  { valor: "RN", texto: "Rio Grande do Norte" },
  { valor: "RS", texto: "Rio Grande do Sul" },
  { valor: "RO", texto: "Rondônia" },
  { valor: "RR", texto: "Roraima" },
  { valor: "SC", texto: "Santa Catarina" },
  { valor: "SP", texto: "São Paulo" },
  { valor: "SE", texto: "Sergipe" },
  { valor: "TO", texto: "Tocantins" }
];

export const valoresIniciaisRefeicaoFichaTypes: RefeicaoDadosFichaTypes = {
  id: "",
  nome: "",
  preco: "",
  descricao: "",
  ingredientes: [],
  imagens_galeria: [],
};

export const valoresIniciaisFormularioCliente: ClienteTypes = {
  nome: "",
  email: "",
  senha: "",
  rua: "",
  numero: "",
  bairro: "",
  cidade: "",
  estado: "",
  cep: "",
  telefone: "",
  confirmacao_senha: ""
};

export const valoresIniciaisFichaDadosCliente: ClienteDadosTypes = {
  id: "",
  codigo: "",
  nome: "",
  email: "",
  senha: "",
  rua: "",
  numero: "",
  bairro: "",
  cidade: "",
  estado: "",
  cep: "",
  telefone: "",
  data_cadastro: "",
  data_modificacao_cadastro: "",
  confirmacao_senha: ""
};

export const dadosIniciaisFormularioLogin: LoginTypes = {
  email: "",
  senha: ""
};

export const dadosIniciaisUsuarioLogado: ClienteLogadoTypes = {
  id: '',
  nome: ''
};