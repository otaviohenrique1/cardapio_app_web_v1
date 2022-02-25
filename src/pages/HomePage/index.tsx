import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import api from "../../utils/api";
import { FormataValorMonetarioTexto } from "../../utils/utils";

interface DataTypes {
  id: string;
  nome: string;
  preco: number;
}

export function HomePage() {
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    api.get('/refeicao')
      .then((data) => {
        let lista = [...data.data];
        let listaFiltrada = lista.filter((item) => {
          return item.ativo !== false;
        });
        let validaLista = (listaFiltrada) ? listaFiltrada : [];
        setData(validaLista);
      })
      .catch((erro) => {
        console.log('Erro', `${erro}`);
      });
  }, []);

  return (
    <ContainerApp titulo="Cardapio">
      <Row className="mt-3">
        {(data.length === 0) ? (
          <ListaVazia />
        ) : (
          <Lista data={data} />
        )}
      </Row>
    </ContainerApp>
  );
}

interface ListaProps {
  data: DataTypes[];
}

function Lista(props: ListaProps) {
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
  data: DataTypes;
}

function ListaItem(props: ListaItemProps) {
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

function ListaVazia() {
  return (
    <Col md={12}>
      <Titulo tag="h1">Lista Vazia</Titulo>
    </Col>
  );
}