import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { FormikHelpers } from "formik";
import { Titulo } from "../../../components/Titulo";
import { FormularioUsuario } from "../../../components/Formularios/FormularioUsuario";
import { ModalErroCadastro, ModalSucessoCadastro } from "../../../components/Modals";
import { ApiCadastroCliente, ApiCadastroClienteTypes } from "../../../utils/api";
import { FORMATO_DATA_COM_HORA_3, valoresIniciaisFormularioCliente } from "../../../utils/constantes";
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
        <FormularioUsuario
          initialValues={valoresIniciaisFormularioCliente}
          validationSchema={validacaoSchemaFormularioUsuario}
          onSubmit={onSubmit}
          enableReinitialize={false}
          voltarLink="/"
        />
      </Row>
    </Container>
  );
}