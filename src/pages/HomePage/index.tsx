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

  const navigate = useNavigate();

  return (
    <ContainerApp titulo="Cardapio">
      <Row className="mt-3">
        {(data.length === 0) ? (
          <Col md={12}>
            <Titulo tag="h1">Lista Vazia</Titulo>
          </Col>
        ) : (
          <Col md={12}>
            {data.map((item, index) => {
              return (
                <ListGroup
                  className="mb-3 pointer-event"
                  key={index}
                  onClick={() => navigate(`/refeicao/${item.id}`)}
                >
                  <ListGroupItem className="bg-info text-black">
                    <Titulo tag="h2">{item.nome}</Titulo>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex flex-row justify-content-between bg-info text-black">
                    <Titulo tag="h3" className="fw-bold">Preço (R$)</Titulo>
                    <Titulo tag="h3">{FormataValorMonetarioTexto(item.preco)}</Titulo>
                  </ListGroupItem>
                </ListGroup>
              );
            })}
          </Col>
        )}
      </Row>
    </ContainerApp>
  );
}
