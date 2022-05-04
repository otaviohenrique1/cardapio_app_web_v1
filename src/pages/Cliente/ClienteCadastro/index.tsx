import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { FormikHelpers } from "formik";
import { Titulo } from "../../../components/Titulo";
import { FormularioCliente } from "../../../components/Formularios/FormularioCliente";
import { ModalErroCadastro, ModalSucessoCadastro } from "../../../components/Modals";
import { ApiCadastroCliente, ApiCadastroClienteTypes, id_empresa_cliente } from "../../../utils/api";
import { FORMATO_DATA_COM_HORA_3, valoresIniciaisCliente } from "../../../utils/constantes";
import { FormatadorDados } from "../../../utils/FormatadorDados";
import { FormatadorCrypto } from "../../../utils/FormatadorCrypto";
import { validacaoSchemaFormularioUsuario } from "../../../utils/ValidacaoSchemas";

export function ClienteCadastro() {
  const navigate = useNavigate();

  async function onSubmit(values: ClienteTypes, helpers: FormikHelpers<ClienteTypes>) {
    const { nome, email, senha, rua, numero, bairro,
      cidade, estado, cep, telefone } = values;

    let senha_formatada = FormatadorCrypto.mensagemSHA512(senha);

    let data_hora_formatada = FormatadorDados.GeradorDataHoraFormatada(FORMATO_DATA_COM_HORA_3);

    const data: ApiCadastroClienteTypes = {
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
      'data_cadastro': data_hora_formatada,
      'data_modificacao_cadastro': data_hora_formatada,
      'empresaId': id_empresa_cliente,
    };

    // await api.post('cliente', data)
    await ApiCadastroCliente(data)
      .then(() => {
        ModalSucessoCadastro();
        helpers.resetForm();
        navigate('/');
      }).catch((error) => {
        ModalErroCadastro();
        console.error(error);
      });
  }

  return (
    <Container className="pt-5">
      <Row>
        <Col md={12}>
          <Titulo tag="h1">Novo Usuário</Titulo>
        </Col>
        <FormularioCliente
          initialValues={valoresIniciaisCliente}
          validationSchema={validacaoSchemaFormularioUsuario}
          onSubmit={onSubmit}
          enableReinitialize={false}
          voltarLink="/"
          exibe_senha_antiga={false}
          senha_antiga={""}
        />
      </Row>
    </Container>
  );
}