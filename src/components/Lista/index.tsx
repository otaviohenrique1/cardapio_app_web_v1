import { useNavigate } from "react-router-dom";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { FormataValorMonetarioTexto } from "../../utils/utils";
import { Titulo } from "../Titulo";

interface ListaProps {
  data: ListaRefeicaoTypes[];
}

export function Lista(props: ListaProps) {
  return (
    <Col md={12}>
      {props.data.map((item, index) => {
        return (
          <ListaItem key={index} data={item} />
        );
      })}
    </Col>
  );
}

interface ListaItemProps  {
  data: ListaRefeicaoTypes;
}

export function ListaItem(props: ListaItemProps) {
  const navigate = useNavigate();

  return (
    <ListGroup
      className="mb-3"
      onClick={() => navigate(`/refeicao/${props.data.id}`)}
    >
      <ListGroupItem className="bg-info text-black">
        <Titulo tag="h2">{props.data.nome}</Titulo>
      </ListGroupItem>
      <ListGroupItem className="d-flex flex-row justify-content-between bg-info text-black">
        <Titulo tag="h3" className="fw-bold">Preço (R$)</Titulo>
        <Titulo tag="h3">{FormataValorMonetarioTexto(props.data.preco)}</Titulo>
      </ListGroupItem>
    </ListGroup>
  );
}

export function ListaVazia() {
  return (
    <Col md={12}>
      <Titulo tag="h1">Lista Vazia</Titulo>
    </Col>
  );
}