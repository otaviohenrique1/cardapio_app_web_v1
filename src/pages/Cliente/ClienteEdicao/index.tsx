import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "reactstrap";
import { ContainerApp } from "../../../components/ContainerApp";
import { FormularioCliente } from "../../../components/Formularios/FormularioCliente";
import { ModalErroCadastro, ModalSucessoCadastro } from "../../../components/Modals";
import { ApiBuscaDadosUmCliente, ApiEdicaoCliente } from "../../../utils/api";
import { FORMATO_DATA_COM_HORA_3, valoresIniciaisFormularioCliente } from "../../../utils/constantes";
import { FormatadorDados } from "../../../utils/FormatadorDados";
import { FormatadorCrypto } from "../../../utils/FormatadorCrypto";
import { validacaoSchemaFormularioUsuario } from "../../../utils/ValidacaoSchemas";

export function ClienteEdicao() {
  const [data, setData] = useState<ClienteTypes>(valoresIniciaisFormularioCliente);
  const navigation = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    if (!id) { return; }

    // api.get(`cliente/${id}`)
    ApiBuscaDadosUmCliente(id)
      .then((item) => {
        let { nome, email, senha, rua, numero, bairro,
          cidade, estado, cep, telefone, confirmacao_senha } = item.data;
        let data: ClienteTypes = {
          nome, email, senha, rua, numero, bairro,
          cidade, estado, cep, telefone,
          confirmacao_senha
        };

        setData(data);
      })
      .catch((error) => {
        ModalErroCadastro();
        console.error(error);
      });
  }, [id]);

  async function handleSubmit(values: ClienteTypes) {
    if (!id) { return; }

    const { nome, email, senha, rua, numero, bairro,
      cidade, estado, cep, telefone } = values;

    let senha_formatada = FormatadorCrypto
      .mensagemSHA512(senha);

    let data_hora_formatada = FormatadorDados
      .GeradorDataHoraFormatada(FORMATO_DATA_COM_HORA_3);

    const data = {
      'id': id,
      'nome': nome,
      'email': email,
      'senha': senha_formatada,
      'rua': rua,
      'numero': numero,
      'bairro': bairro,
      'cidade': cidade,
      'estado': estado,
      'cep': cep,
      'telefone': telefone,
      'data_modificacao_cadastro': data_hora_formatada,
    };

    // await api.put(`cliente/${id}`, data)
    await ApiEdicaoCliente(data)
      .then(() => {
        ModalSucessoCadastro();
        navigation(`/cliente/${id}`);
      }).catch((error) => {
        ModalErroCadastro();
        console.error(error);
      });
  }

  const { nome, email, senha, rua, numero, bairro, cidade, estado, cep, telefone, confirmacao_senha } = data;

  const dadosDoUsuario: ClienteTypes = {
    nome: nome || "",
    email: email || "",
    senha: "",
    rua: rua || "",
    numero: numero || "",
    bairro: bairro || "",
    cidade: cidade || "",
    estado: estado || "",
    cep: cep || "",
    telefone: telefone || "",
    confirmacao_senha: confirmacao_senha || ""
  };

  const senha_antiga = FormatadorDados.FormataExibicaoSenha(senha.slice(0, 12));

  return (
    <ContainerApp titulo="Edição de dados">
      <Row>
        <FormularioCliente
          initialValues={dadosDoUsuario}
          validationSchema={validacaoSchemaFormularioUsuario}
          onSubmit={handleSubmit}
          enableReinitialize
          voltarLink={`/cliente/${id}`}
          exibe_senha_antiga={true}
          senha_antiga={senha_antiga}
        />
      </Row>
    </ContainerApp>
  );
}
