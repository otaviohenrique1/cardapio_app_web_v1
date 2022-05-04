import { useNavigate } from "react-router-dom";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { Titulo } from "../../Titulo";

interface ListaProps {
  data: RefeicaoTypes[];
}

export function ListaRefeicao(props: ListaProps) {
  const { data } = props;

  return (
    <Col md={12}>
      {data.map((item, index) => {
        return (
          <ListaRefeicaoItem key={index} data={item} />
        );
      })}
    </Col>
  );
}

interface ListaRefeicaoItemProps {
  data: RefeicaoTypes;
}

function ListaRefeicaoItem(props: ListaRefeicaoItemProps) {
  const { id, nome, preco } = props.data;

  const navigate = useNavigate();

  return (
    <ListGroup
      className="mb-3"
      onClick={() => navigate(`/refeicao/${id}`)}
    >
      <ListGroupItem className="bg-info text-black">
        <Titulo tag="h2">{nome}</Titulo>
      </ListGroupItem>
      <ListGroupItem className="d-flex flex-row justify-content-between bg-info text-black">
        <Titulo tag="h3" className="fw-bold">Preço (R$)</Titulo>
        <Titulo tag="h3">{preco}</Titulo>
      </ListGroupItem>
    </ListGroup>
  );
}
