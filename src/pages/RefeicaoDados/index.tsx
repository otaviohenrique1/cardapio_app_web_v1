import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import { ModalErroDadosNaoCarregados } from "../../components/Modals";
import { ListaIngredientes } from "../../components/Listas/ListaIngredientes";
import { ApiBuscaDadosUmaRefeicao } from "../../utils/api";
import { FormatadorDados } from "../../utils/FormatadorDados";
import { valoresIniciaisRefeicaoFichaTypes } from "../../utils/constantes";
import { BotaoLinkVoltar } from "../../components/Botoes/BotaoLink";
import { CarouselFotos } from "../../components/Carousel";

export function RefeicaoDados() {
  const [data, setData] = useState<RefeicaoDadosFichaTypes>(valoresIniciaisRefeicaoFichaTypes);
  const { id } = useParams();

  useEffect(() => {
    if (!id) { return; }
    
    // api.get(`refeicao/${id}`)
    ApiBuscaDadosUmaRefeicao(id)
      .then((item) => {
        if (!id) { return; }

        const { nome, preco, ingredientes, descricao, imagens } = item.data;

        const preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);

        const ingredientes_lista_formatada = [...ingredientes] as IngredientesTypes[];
        const imagens_lista = [...imagens] as FotoTypes[];

        const data: RefeicaoDadosFichaTypes = {
          id,
          nome: String(nome),
          preco: preco_formatado,
          ingredientes: ingredientes_lista_formatada,
          descricao: String(descricao),
          imagens_galeria: imagens_lista,
        };

        setData(data);
      })
      .catch((error) => {
        ModalErroDadosNaoCarregados();
        console.error(error);
      });
  }, [id]);

  const { nome, preco, ingredientes, descricao, imagens_galeria } = data;

  return (
    <>
      <ContainerApp titulo="Cardapio">
        <Row className="mt-4">
          <Col md={12} className="pb-4">
            <Titulo tag="h1" className="w-100 text-center">{nome}</Titulo>
          </Col>
          <Col md={12} className="pt-3 pb-3 d-flex border-bottom border-dark">
            <CarouselFotos data={imagens_galeria} />
          </Col>
          <Col md={12} className="pt-3 pb-3 d-flex flex-row justify-content-between  border-bottom border-dark">
            <Titulo tag="h2" className="fw-bold">Preço (R$)</Titulo>
            <Titulo tag="h2">{preco}</Titulo>
          </Col>
          <Col md={12} className="pt-3 pb-3 d-flex flex-column border-bottom border-dark">
            <Titulo tag="h2" className="fw-bold">Descrição</Titulo>
            <Titulo tag="h2">{descricao}</Titulo>
          </Col>
          <Col md={12} className="pt-3 border-bottom border-dark">
            <ListaIngredientes data={ingredientes} />
          </Col>
        </Row>
      </ContainerApp>
      <BotaoLinkVoltar
        to={`/home`}
        color="primary"
        className="btn-lg position-absolute bottom-0 w-100 rounded-0"
        font_size={'27px'}
      >Voltar</BotaoLinkVoltar>
    </>
  );
}
