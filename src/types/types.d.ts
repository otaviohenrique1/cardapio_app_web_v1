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
  "password";

/* Parte do Login */
interface LoginTypes {
  email: string;
  senha: string;
}

interface UsuarioLogadoTypes {
  id: string;
  nome: string;
}

/* Parte do Usuario */
interface UsuarioTypes {
  nome: string;
  email: string;
  senha: string;
}

interface UsuarioDadosTypes extends UsuarioTypes {
  id: string;
  codigo: string;
  data_cadastro: string;
  data_modificacao_cadastro: string;
}

/* Parte da Refeicao */
interface RefeicaoBaseTypes {
  nome: string;
  preco: number;
}

interface RefeicaoTypes extends RefeicaoBaseTypes {
  nome: string;
  preco: string | number;
  descricao: string;
  ingredientes: Ingredientes[];
  imagens: File[];
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