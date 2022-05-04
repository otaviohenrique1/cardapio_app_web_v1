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
  id: string;
  data_cadastro: string;
  data_modificacao_cadastro: string;
  empresaId: string;
}

/* Parte da Refeicao */
interface IngredientesTypes {
  id: string;
  nome: string;
  quantidade: number | string;
  unidade_quantidade: string;
  removivel: boolean;
}

interface IngredientesOpcionaisTypes {
  id: string;
  nome: string;
  preco: number;
}

interface FotoTypes {
  id: number;
  url: string;
  nome: string;
}

interface RefeicaoTypes {
  id: string;
  nome: string;
  preco: string | number;
  ingredientes: IngredientesTypes[];
  lista_opcionais: ListaOpcionaisItemTypes[];
  tipo_produto: string,
  descricao: string;
  imagens_galeria: FotoTypes[];
}

/* Parte do Pedido */
interface PedidoTypes {
  id: string;
  lista_refeicoes: ListaRefeicoesItemTypes[];
  preco_total: number;
  data_cadastro: string;
  data_modificacao_cadastro: string;
  clienteId: string;
  status_pedido: string;
}

interface ListaRefeicoesItemTypes {
  id: string;
  refeicaoId: string;
  quantidade: number;
  pedidoId: string;
  lista_opcionais: ListaOpcionaisItemTypes[];
  lista_ingredientes_removidos: ListaIngredientesRemovidosItemTypes[];
}

interface ListaOpcionaisItemTypes {
  id: string;
  nome: string;
  preco: number;
  pedidoRefeicaoId: string;
  refeicaoId: string;
}

interface ListaIngredientesRemovidosItemTypes {
  id: string;
  nome: string;
  pedidoRefeicaoId: string;
}
