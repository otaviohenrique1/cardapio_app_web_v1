interface ListaRefeicaoTypes {
  id: string;
  nome: string;
  preco: number;
}

interface RefeicaoTypes {
  nome: string;
  preco: number;
  ingredientes: { 
    nome: string
  }[];
}