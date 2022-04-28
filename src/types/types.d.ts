/* Types */
type ButtonColors =
  "primary" |
  "secondary" |
  "success" |
  "danger" |
  "warning" |
  "info" |
  "light" |
  "dark" |
  "link";

type DataHoraFormatos =
  "HH:mm" |
  "HH:mm:ss" |
  "dd/MM/yyyy" |
  "yyyy-MM-dd" |
  'yyyy-MM-dd HH:mm' |
  'dd/MM/yyyy HH:mm' |
  'yyyy-MM-dd HH:mm:ss' |
  'dd/MM/yyyy HH:mm:ss';

type CampoInputTypes =
  "text" |
  "number" |
  "email" |
  "password" |
  "tel";

/* Parte do Login */
interface LoginTypes {
  email: string;
  senha: string;
}

interface ClienteLogadoTypes {
  id: string;
  nome: string;
}

/* Parte do Usuario */
interface ClienteTypes {
  nome: string;
  email: string;
  senha: string;
  confirmacao_senha: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
}

interface ClienteDadosTypes extends ClienteTypes {
  id: string;
  codigo: string;
  data_cadastro: string;
  data_modificacao_cadastro: string;
}

/* Parte da Refeicao */
interface IngredientesTypes {
  nome: string;
  quantidade: number | string;
}

interface FotoTypes {
  id: number;
  url: string;
  nome: string;
}

interface RefeicaoBaseTypes {
  nome: string;
  preco: number;
}

interface RefeicaoTypes extends RefeicaoBaseTypes {
  nome: string;
  preco: string | number;
  descricao: string;
  ingredientes: IngredientesTypes[];
}

interface RefeicaoDadosFichaTypes {
  id: string;
  nome: string;
  preco: string | number;
  descricao: string;
  ingredientes: IngredientesTypes[];
  imagens_galeria: FotoTypes[];
}

// interface RefeicaoDadosTypes extends RefeicaoTypes {
//   id: string;
//   codigo: string;
//   data_cadastro: string;
//   data_modificacao_cadastro: string;
// }

interface RefeicaoListaTypes extends RefeicaoBaseTypes {
  id: string;
}

interface Ingredientes {
  nome: string;
}

/*
interface Ingredientes {
  nome: string;
}

interface RefeicaoTypes {
  nome: string;
  preco: string | number;
  ingredientes: Ingredientes[];
  descricao: string;
  ativo: string | boolean;
  imagens: File[];
}

interface RefeicaoDadosTypes extends RefeicaoTypes {
  id: string;
  codigo: string;
  data_cadastro: string;
  data_modificacao_cadastro: string;
}
*/