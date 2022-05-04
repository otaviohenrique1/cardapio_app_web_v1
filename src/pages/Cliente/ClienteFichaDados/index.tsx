import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { BotaoLinkVoltar } from "../../../components/Botoes/BotaoLink";
import { ContainerApp } from "../../../components/ContainerApp";
import { ItemListaFichaDadosBaseTypes, ListaFichaDados } from "../../../components/Listas/ListaFichaDados";
import { ModalErroCadastro } from "../../../components/Modals";
import { ApiBuscaDadosUmCliente } from "../../../utils/api";
import { FORMATO_DATA_COM_HORA_4, valoresIniciaisCliente } from "../../../utils/constantes";
import { FormatadorDados } from "../../../utils/FormatadorDados";

export function ClienteFichaDados() {
  const [data, setData] = useState<ClienteTypes>(valoresIniciaisCliente);
  const { id } = useParams();

  useEffect(() => {
    if (!id) { return; }

    // api.get(`cliente/${id}`)
    ApiBuscaDadosUmCliente(id)
      .then((item) => {
        const { nome, email, senha, rua, numero, bairro, cidade, estado, cep, telefone,
          data_cadastro, data_modificacao_cadastro } = item.data;

        const senha_formatada = FormatadorDados
          .FormataExibicaoSenha(String(senha), 12);

        const data_cadastro_formatada = FormatadorDados
          .FormatadorDataHora(data_cadastro, FORMATO_DATA_COM_HORA_4);

        const data_modificacao_cadastro_formatada = FormatadorDados
          .FormatadorDataHora(data_modificacao_cadastro, FORMATO_DATA_COM_HORA_4);

        const data: ClienteTypes = {
          id, nome, email, senha: senha_formatada, rua, numero, bairro, cidade, estado, cep, telefone,
          data_cadastro: data_cadastro_formatada, data_modificacao_cadastro: data_modificacao_cadastro_formatada,
          confirmacao_senha: "", empresaId: ""
        };

        setData(data);
      })
      .catch((error) => {
        ModalErroCadastro();
        console.error(error);
      });
  }, [id]);

  const { nome, email, senha, rua, numero, bairro, cidade, estado, cep, telefone,
    data_cadastro, data_modificacao_cadastro } = data;

  const data_ficha: ItemListaFichaDadosBaseTypes[] = [
    { titulo: "Nome", valor: nome },
    { titulo: "E-mail", valor: email },
    { titulo: "Senha", valor: senha },
    { titulo: "Rua", valor: rua },
    { titulo: "Numero", valor: numero },
    { titulo: "Bairro", valor: bairro },
    { titulo: "Cidade", valor: cidade },
    { titulo: "Estado", valor: estado },
    { titulo: "CEP", valor: cep },
    { titulo: "Telefone", valor: telefone },
    { titulo: "Data de cadastro", valor: data_cadastro },
    { titulo: "Data de atualização do cadastro", valor: data_modificacao_cadastro },
  ];

  return (
    <ContainerApp titulo="Dados do usuário">
      <Row>
        <Col md={12}>
          <ListaFichaDados data={data_ficha} />
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