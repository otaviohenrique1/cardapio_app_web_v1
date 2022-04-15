import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { BotaoLinkVoltar } from "../../../components/Botoes/BotaoLink";
import { ContainerApp } from "../../../components/ContainerApp";
import { ItemListaFichaDadosBaseTypes, ListaFichaDados } from "../../../components/Listas/ListaFichaDados";
import { ModalErroCadastro } from "../../../components/Modals";
import api from "../../../utils/api";
import { FORMATO_DATA_COM_HORA_4 } from "../../../utils/constantes";
import { FormatadorDados } from "../../../utils/FormatadorDados";

export function ClienteDados() {
  const [data, setData] = useState<ItemListaFichaDadosBaseTypes[]>([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) { return; }

    api.get(`cliente/${id}`)
      .then((item) => {
        const { nome, email, senha, codigo, data_cadastro, data_modificacao_cadastro } = item.data;

        const senha_formatada = FormatadorDados
          .FormataExibicaoSenha(String(senha), 12);

        const data_cadastro_formatada = FormatadorDados
          .FormatadorDataHora(data_cadastro, FORMATO_DATA_COM_HORA_4);

        const data_modificacao_cadastro_formatada = FormatadorDados
          .FormatadorDataHora(data_modificacao_cadastro, FORMATO_DATA_COM_HORA_4);

        setData([
          { titulo: "Id", valor: id },
          { titulo: "Nome", valor: String(nome) },
          { titulo: "E-mail", valor: String(email) },
          { titulo: "Senha", valor: senha_formatada },
          { titulo: "Código", valor: String(codigo) },
          { titulo: "Data de cadastro", valor: data_cadastro_formatada },
          { titulo: "Data de atualização do cadastro", valor: data_modificacao_cadastro_formatada },
        ]);
      })
      .catch((error) => {
        ModalErroCadastro();
        console.error(error);
      });
  }, [id]);

  return (
    <ContainerApp titulo="Dados do usuário">
      <Row>
        <Col md={12}>
          <ListaFichaDados data={data} />
        </Col>
        <Col md={12} className="d-flex justify-content-end mt-5">
          <BotaoLinkVoltar
            to={`/cliente/${id}/edicao`}
            color="primary"
            className="btn-lg position-absolute bottom-0 w-100 rounded-0"
            font_size={'27px'}
          >Editar</BotaoLinkVoltar>
        </Col>
      </Row>
    </ContainerApp>
  );
}