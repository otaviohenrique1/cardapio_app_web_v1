export const EMAIL_INVALIDO = "Email invalido";
export const valor_minimo_carateres = 8;
export const MINIMO_CARACTERES = `Minimo ${valor_minimo_carateres} carateres`;
export const valor_maximo_carateres = 255;
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

export const valoresIniciaisRefeicao: RefeicaoTypes = {
  id: "",
  nome: "",
  preco: "",
  ingredientes: [],
  lista_opcionais: [],
  tipo_produto: "",
  descricao: "",
  imagens_galeria: []
};

export const valoresIniciaisCliente: ClienteTypes = {
  nome: "",
  email: "",
  senha: "",
  confirmacao_senha: "",
  rua: "",
  numero: "",
  bairro: "",
  cidade: "",
  estado: "",
  cep: "",
  telefone: "",
  id: "",
  data_cadastro: "",
  data_modificacao_cadastro: "",
  empresaId: ""
};

export const dadosIniciaisFormularioLogin: LoginTypes = {
  email: "",
  senha: ""
};

export const dadosIniciaisUsuarioLogado: ClienteLogadoTypes = {
  id: '',
  nome: ''
};