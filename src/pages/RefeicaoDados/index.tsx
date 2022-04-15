import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import { ModalErroDadosNaoCarregados } from "../../components/Modals";
import { ListaIngredientes } from "../../components/Listas/ListaIngredientes";
import api from "../../utils/api";
import { ConversorListas } from "../../utils/ConversorListas";
import { FormatadorDados } from "../../utils/FormatadorDados";
import { valoresIniciaisRefeicao } from "../../utils/constantes";

export function RefeicaoDados() {
  const [data, setData] = useState<RefeicaoTypes>(valoresIniciaisRefeicao);
  const { id } = useParams();

  useEffect(() => {
    if (!id) { return; }

    api.get(`/refeicao/${id}`)
      .then((item) => {
        const { nome, preco, ingredientes, descricao, imagens } = item.data;

        let preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);
        let ingredientes_lista = ConversorListas.ConverteStringParaArrayObjetos(ingredientes);
        let imagem_lista = [...imagens];

        console.log(`-----------------------`);
        console.log("ID");
        console.log(id);
        console.log(`-----------------------`);
        console.log("Nome");
        console.log(nome);
        console.log(`-----------------------`);
        console.log("Preço");
        console.log(preco);
        console.log(`-----------------------`);
        console.log("Preço formatado");
        console.log(preco_formatado);
        console.log(`-----------------------`);
        console.log("Ingredientes");
        console.log(ingredientes);
        console.log(`-----------------------`);
        console.log("Ingredientes");
        console.log(ingredientes_lista);
        console.log(`-----------------------`);
        console.log("Descrição");
        console.log(descricao);
        console.log(`-----------------------`);
        console.log("Imagens");
        console.log(imagens);
        console.log(`-----------------------`);
        console.log("Imagens lista");
        console.log(imagem_lista);
        console.log(`-----------------------`);

        // setData({
        //   nome: String(nome),
        //   preco: preco_formatado,
        //   ingredientes: ingredientes_lista,
        //   descricao: String(descricao),
        //   imagens: imagem_lista
        // });
      })
      .catch((error) => {
        ModalErroDadosNaoCarregados();
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
          <Col md={12}>
            <Titulo tag="h1" className="fw-bold">Local da(s) imagem(s)</Titulo>
          </Col>
          <Col md={12} className="pt-3 pb-3 ms d-flex flex-row justify-content-between border-top border-bottom border-dark">
            <Titulo tag="h2" className="fw-bold">Preço (R$)</Titulo>
            <Titulo tag="h2">{data.preco}</Titulo>
          </Col>
          <Col md={12} className="pt-3">
            <ListaIngredientes data={data.ingredientes} />
          </Col>
        </Row>
      </ContainerApp>
      <BotaoVoltar to="/" className="btn btn-lg btn-primary position-absolute bottom-0 w-100 rounded-0">Voltar</BotaoVoltar>
    </>
  );
}

const BotaoVoltar = styled(Link)`
  font-size: 27px;
`;
