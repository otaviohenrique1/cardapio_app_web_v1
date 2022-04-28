import { ListGroup, ListGroupItem } from "reactstrap";
import { Titulo } from "../../Titulo";

export interface ItemListaFichaDadosBaseTypes {
  titulo: string | number | JSX.Element /* any */;
  valor: string | number | JSX.Element /* any */;
}

export interface ListaFichaDadosProps {
  data: ItemListaFichaDadosBaseTypes[];
}

export function ListaFichaDados(props: ListaFichaDadosProps) {
  const { data } = props;

  return (
    <ListGroup>
      {data.map((item, index) => {
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
  const { titulo, valor } = props.data;

  return (
    <ListGroupItem className="d-flex flex-row justify-content-between">
      <Titulo tag="h5" className="w-100">{titulo}</Titulo>
      <Titulo tag="h6" className="w-100">{valor}</Titulo>
    </ListGroupItem>
  );
}
