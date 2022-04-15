import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Titulo } from "../../../components/Titulo";
import { ContainerApp } from "../../../components/ContainerApp";
import { FormularioUsuario } from "../../../components/Formularios/FormularioUsuario";
import { ModalErroCadastro, ModalSucessoCadastro } from "../../../components/Modals";
import api from "../../../utils/api";
import { valoresIniciaisFormularioUsuario } from "../../../utils/constantes";
import { FormatadorDados } from "../../../utils/FormatadorDados";
import { FormatadorCrypto } from "../../../utils/FormatadorCrypto";
import { validacaoSchemaFormularioUsuario } from "../../../utils/ValidacaoSchemas";

export function ClienteEdicao() {
  const [data, setData] = useState<UsuarioTypes>(valoresIniciaisFormularioUsuario);
  const navigation = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    api.get(`usuario/${id}`)
      .then((item) => {
        let { nome, email, senha } = item.data;
        let data = { nome, email, senha };

        setData(data);
      })
      .catch((error) => {
        ModalErroCadastro();
        console.error(error);
      });
  }, [id]);

  const dadosDoUsuario: UsuarioTypes = {
    nome: data.nome || "",
    email: data.email || "",
    senha: data.senha || "",
  };

  async function handleSubmit(values: UsuarioTypes) {
    const { nome, email, senha } = values;

    let senha_formatada = FormatadorCrypto.mensagemSHA512(senha);
    let data_modificacao_cadastro = FormatadorDados.GeradorDataHoraFormatada("yyyy-MM-dd HH:mm:ss");

    const data = {
      'id': id,
      'nome': nome,
      'email': email,
      'senha': senha_formatada,
      'data_modificacao_cadastro': data_modificacao_cadastro,
    };

    await api.put(`usuario/${id}`, data)
      .then(() => {
        ModalSucessoCadastro();
        navigation(`/usuario/${id}`);
      }).catch((error) => {
        ModalErroCadastro();
        console.error(error);
      });
  }

  return (
    <ContainerApp>
      <Row>
        <Col md={12}>
          <Titulo tag="h1" className="w-100 text-center mb-5">Edição de dados</Titulo>
        </Col>
        <FormularioUsuario
          initialValues={dadosDoUsuario}
          validationSchema={validacaoSchemaFormularioUsuario}
          onSubmit={handleSubmit}
          enableReinitialize
          voltarLink={`/usuario/${id}`}
        />
      </Row>
    </ContainerApp>
  );
}
