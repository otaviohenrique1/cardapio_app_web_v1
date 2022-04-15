import { ListGroup, ListGroupItem } from "reactstrap";
import { Titulo } from "../../Titulo";

export interface ItemListaFichaDadosBaseTypes {
  titulo: string | number | JSX.Element /* any */;
  valor: string | number | JSX.Element /* any */;
}

interface ListaFichaDadosProps {
  data: ItemListaFichaDadosBaseTypes[];
}

export function ListaFichaDados(props: ListaFichaDadosProps) {
  return (
    <ListGroup>
      {props.data.map((item, index) => {
        const { titulo, valor } = item;
        const data = { titulo, valor };
        return (
          <ItemListaFichaDados key={index} data={data} />
        );
      })}
    </ListGroup>
  );
}


interface ItemListaFichaDadosProps {
  // titulo: string | number | JSX.Element /* any */;
  // valor: string | number | JSX.Element /* any */;
  // children: ReactNode;
  data: ItemListaFichaDadosBaseTypes;
}

function ItemListaFichaDados(props: ItemListaFichaDadosProps) {
  return (
    <ListGroupItem className="d-flex flex-row justify-content-between">
      <Titulo tag="h5" className="w-100">{props.data.titulo}</Titulo>
      <Titulo tag="h6" className="w-100">{props.data.valor}</Titulo>
    </ListGroupItem>
  );
}
