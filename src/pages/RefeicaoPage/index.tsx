import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import api from "../../utils/api";
import { FormataValorMonetarioTexto } from "../../utils/utils";
import { MdPlayArrow } from "react-icons/md";
import styled from "styled-components";
import { valoresIniciaisRefeicao } from "../../utils/constantes";

export function RefeicaoPage() {
  const [data, setData] = useState<RefeicaoTypes>(valoresIniciaisRefeicao);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    api.get(`/refeicao/${id}`)
      .then((item) => {
        let nome = String(item.data.nome);
        let preco = parseFloat(item.data.preco);
        let ingredientes = JSON.parse(String(item.data.ingredientes));

        setData({ nome, preco, ingredientes })
      })
      .catch((error) => {
        console.error(error);
      });

  }, [id]);

  return (
    <>
      <ContainerApp titulo="Cardapio">
        <Row className="mt-4">
          <Col md={12} className="pb-4">
            <Titulo tag="h1" className="w-100 text-center">{data.nome}</Titulo>
          </Col>
          <Col md={12} className="pt-3 pb-3 ms d-flex flex-row justify-content-between border-top border-bottom border-dark">
            <Titulo tag="h2" className="fw-bold">Preço (R$)</Titulo>
            <Titulo tag="h2">{FormataValorMonetarioTexto(data.preco)}</Titulo>
          </Col>
          <Col md={12} className="pt-3 d-flex flex-column">
            <Titulo tag="h2" className="mb-3">Ingredientes</Titulo>
            {data.ingredientes.map((item, index) => {
              return (
                <IngredienteItem key={index} nome={item.nome} />
              );
            })}
          </Col>
        </Row>
      </ContainerApp>
      <BotaoVoltar to="/" className="btn btn-lg btn-primary position-absolute bottom-0 w-100 rounded-0">Voltar</BotaoVoltar>
    </>
  );
}

interface IngredienteItemProps {
  nome: string;
}

function IngredienteItem(props: IngredienteItemProps) {
  return (
    <div className="d-flex flex-row align-items-center">
      <MdPlayArrow size={25} className="me-1" />
      <Titulo tag="h2" className="p-0 m-0">{props.nome}</Titulo>
    </div>
  );
}

const BotaoVoltar = styled(Link)`
  font-size: 27px;
`;
