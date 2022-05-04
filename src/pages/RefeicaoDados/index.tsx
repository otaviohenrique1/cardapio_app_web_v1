import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import { ModalErroDadosNaoCarregados } from "../../components/Modals";
import { ListaIngredientes } from "../../components/Listas/ListaIngredientes";
import { ApiBuscaDadosUmaRefeicao } from "../../utils/api";
import { FormatadorDados } from "../../utils/FormatadorDados";
import { valoresIniciaisRefeicao } from "../../utils/constantes";
import { BotaoLinkVoltar } from "../../components/Botoes/BotaoLink";
import { CarouselFotos } from "../../components/Carousel";
import { Form, Formik, FormikHelpers } from "formik";
import { CampoCheckbox } from "../../components/Campos/CampoCheckbox";
import { Botao } from "../../components/Botoes/Botao";

export function RefeicaoDados() {
  const [data, setData] = useState<RefeicaoTypes>(valoresIniciaisRefeicao);
  const { id } = useParams();

  useEffect(() => {
    if (!id) { return; }

    // api.get(`refeicao/${id}`)
    ApiBuscaDadosUmaRefeicao(id)
      .then((item) => {
        if (!id) { return; }

        const { nome, preco, ingredientes, descricao, imagens, tipo_produto, lista_opcionais } = item.data;

        const preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);

        const ingredientes_lista_formatada = [...ingredientes] as IngredientesTypes[];
        const ingredientes_opcionais_lista_formatada = [...lista_opcionais] as ListaOpcionaisItemTypes[];
        const imagens_lista = [...imagens] as FotoTypes[];

        const data: RefeicaoTypes = {
          id,
          nome: String(nome),
          preco: preco_formatado,
          ingredientes: ingredientes_lista_formatada,
          descricao: String(descricao),
          imagens_galeria: imagens_lista,
          lista_opcionais: ingredientes_opcionais_lista_formatada,
          tipo_produto: tipo_produto
        };

        setData(data);
      })
      .catch((error) => {
        ModalErroDadosNaoCarregados();
        console.error(error);
      });
  }, [id]);

  const { nome, preco, ingredientes, descricao, imagens_galeria, lista_opcionais, tipo_produto } = data;
  const lista_itens_removidos = ingredientes.filter((item) => item.removivel !== false);

  return (
    <>
      <ContainerApp titulo="Cardapio">
        <Formik
          initialValues={valoresIniciaisPedidoItem}
          onSubmit={onSubmitForm}
        >
          {(formik_props) => {
            return (
              <Form className="mt-4">
                <Row className="m-0 p-0">
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
                  <Col md={12} className="pt-3 pb-3 d-flex flex-column border-bottom border-dark">
                    <Titulo tag="h2" className="fw-bold">Tipo de produto</Titulo>
                    <Titulo tag="h2">{tipo_produto}</Titulo>
                  </Col>
                  <Col md={12} className="pt-3 border-bottom border-dark">
                    <ListaIngredientes data={ingredientes} />
                  </Col>
                  <Col md={12} className="d-flex flex-column pt-3 border-bottom border-dark">
                    <Titulo tag="h2">Removidos</Titulo>
                    <div role="group" aria-labelledby="checkbox-group" className="d-flex flex-column">
                      {lista_itens_removidos.map((item, index) => {
                        const { id, nome } = item;
                        const id_texto = `item_removivel_${id}_${index}`;
                        return (
                          <div key={index} className="m-1">
                            <CampoCheckbox
                              checkbox_id={id_texto}
                              checkbox_value={nome}
                              checkbox_label={nome}
                              checkbox_name="item_removivel"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col md={12} className="d-flex flex-column pt-3 border-bottom border-dark">
                    <Titulo tag="h2">Opcionais</Titulo>
                    <div role="group" aria-labelledby="checkbox-group" className="d-flex flex-column">
                      {lista_opcionais.map((item, index) => {
                        const { id, nome, preco } = item;
                        const preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);
                        const item_lista_opcional_texto = `${nome} (R$ ${preco_formatado})`;
                        const id_texto = `item_opcional_${id}_${index}`;
                        return (
                          <div key={index} className="m-1">
                            <CampoCheckbox
                              checkbox_id={id_texto}
                              checkbox_value={item_lista_opcional_texto}
                              checkbox_label={item_lista_opcional_texto}
                              checkbox_name="item_opcional"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col md={12} className="d-flex flex-column mt-2">
                    <Botao
                      color="primary"
                      type="submit"
                      className="btn-lg w-100 rounded-0 mb-1"
                    >Comprar</Botao>
                    <BotaoLinkVoltar
                      to={`/home`}
                      color="primary"
                      className="btn-lg w-100 rounded-0"
                      font_size={'27px'}
                    >Voltar</BotaoLinkVoltar>
                  </Col>
                </Row>
              </Form>
            );
          }}
        </Formik>
      </ContainerApp>
    </>
  );

  function onSubmitForm(values: PedidoItem, formikHelpers: FormikHelpers<PedidoItem>) {
    const ingredientes_opcionais = values.lista_ingredientes_opcionais;
    const ingredientes_removidos = values.lista_ingredientes_removidos;
    console.log(ingredientes_opcionais);
    console.log(ingredientes_removidos);
  }
}

interface PedidoItem {
  lista_ingredientes_removidos: ListaIngredientesRemovidosItemTypes[];
  lista_ingredientes_opcionais: ListaOpcionaisItemTypes[];
}

const valoresIniciaisPedidoItem: PedidoItem = {
  lista_ingredientes_removidos: [],
  lista_ingredientes_opcionais: []
};