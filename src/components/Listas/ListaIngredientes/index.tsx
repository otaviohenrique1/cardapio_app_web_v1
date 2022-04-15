import { MdPlayArrow } from "react-icons/md";
import { Titulo } from "../../Titulo";

interface IngredientesTypes {
  nome: string;
}

interface ListaIngredientesProps {
  data: IngredientesTypes[];
}

export function ListaIngredientes(props: ListaIngredientesProps) {
  return (
    <div className="d-flex flex-column">
      <Titulo tag="h5" className="w-100">Ingredientes</Titulo>
      {props.data.map((item, index) => {
        return (
          <ItemListaIngredientes data={item.nome} key={index} />
        );
      })}
    </div>
  );
}

interface ItemListaIngredientesProps {
  data: string;
}

function ItemListaIngredientes(props: ItemListaIngredientesProps) {
  return (
    <div className="d-flex flex-row align-items-center">
      <MdPlayArrow size={25} className="me-1" />
      <Titulo tag="h2" className="p-0 m-0">{props.data}</Titulo>
    </div>
  );
}
