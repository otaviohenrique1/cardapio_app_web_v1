import { useNavigate } from "react-router-dom";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { FormatadorDados } from "../../../utils/FormatadorDados";
import { Titulo } from "../../Titulo";

interface ListaProps {
  data: RefeicaoListaTypes[];
}

export function ListaRefeicao(props: ListaProps) {
  return (
    <Col md={12}>
      {props.data.map((item, index) => {
        return (
          <ListaRefeicaoItem key={index} data={item} />
        );
      })}
    </Col>
  );
}

interface ListaRefeicaoItemProps {
  data: RefeicaoListaTypes;
}

function ListaRefeicaoItem(props: ListaRefeicaoItemProps) {
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
        <Titulo tag="h3">{FormatadorDados.FormataValorMonetarioTexto(props.data.preco)}</Titulo>
      </ListGroupItem>
    </ListGroup>
  );
}
