import { Form, Formik, FormikHelpers } from "formik";
import { To } from "react-router-dom";
import { ButtonGroup, Col, Row } from "reactstrap";
import { lista_estados } from "../../../utils/listas";
import { Botao } from "../../Botoes/Botao";
import { BotaoLink } from "../../Botoes/BotaoLink";
import { CampoInput, CampoInputProps } from "../../Campos/CampoInput";
import { CampoSelectComErro } from "../../Campos/CampoSelect";
import { CampoSenhaAntiga } from "../../Campos/CampoSenhaAntiga";

interface FormularioClientesProps {
  initialValues: ClienteTypes;
  validationSchema: any;
  onSubmit: (values: ClienteTypes, helpers: FormikHelpers<ClienteTypes>) => Promise<void>;
  voltarLink: To;
  enableReinitialize: boolean;
  exibe_senha_antiga: boolean;
  senha_antiga: string;
}

export function FormularioCliente(props: FormularioClientesProps) {
  const { initialValues, validationSchema, onSubmit, voltarLink, enableReinitialize, exibe_senha_antiga, senha_antiga } = props;

  return (
    <Col md={12}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={enableReinitialize}
      >
        {(formik_props) => {
          const { errors, touched, values } = formik_props;
          const lista_campos_dados: CampoInputProps[] = [
            {
              md: 12, id: "nome", label: "Nome", name: "Nome", type: "text", placeholder: "Digite o nome",
              value: values.nome, error: errors.nome, touched: touched.nome
            },
            {
              md: 12, id: "telefone", label: "telefone", name: "telefone", type: "tel", placeholder: "Digite o seu telefone",
              value: values.telefone, error: errors.telefone, touched: touched.telefone
            },
            {
              md: 12, id: "rua", label: "Rua", name: "rua", type: "text", placeholder: "Digite a sua rua",
              value: values.rua, error: errors.rua, touched: touched.rua
            },
            {
              md: 12, id: "numero", label: "numero", name: "numero", type: "text", placeholder: "Digite o numero da casa",
              value: values.numero, error: errors.numero, touched: touched.numero
            },
            {
              md: 12, id: "bairro", label: "Bairro", name: "bairro", type: "text", placeholder: "Digite o seu bairro",
              value: values.bairro, error: errors.bairro, touched: touched.bairro
            },
            {
              md: 12, id: "cep", label: "cep", name: "cep", type: "text", placeholder: "Digite o seu cep",
              value: values.cep, error: errors.cep, touched: touched.cep
            },
            {
              md: 12, id: "cidade", label: "Cidade", name: "cidade", type: "text", placeholder: "Digite a sua cidade",
              value: values.cidade, error: errors.cidade, touched: touched.cidade
            },
            {
              md: 12, id: "email", label: "E-mail", name: "E-mail", type: "email", placeholder: "Digite o e-mail",
              value: values.email, error: errors.email, touched: touched.email
            },
            {
              md: 12, id: "senha", label: "Senha", name: "Senha", type: "password", placeholder: "Digite a senha",
              value: values.senha, error: errors.senha, touched: touched.senha
            },
            {
              md: 12, type: "password", id: "confirmacao_senha", name: "confirmacao_senha", label: "Confirme a senha",
              placeholder: "Digite novamente a sua senha", value: values.confirmacao_senha,
              error: errors.confirmacao_senha, touched: touched.confirmacao_senha
            }
          ];

          return (
            <Form>
              <Row>
                {lista_campos_dados.map((item, index) => {
                  const { md, id, label, name, type, placeholder, value, error, touched } = item;

                  return (
                    <CampoInput key={index} md={md} id={id} label={label} name={name} type={type}
                      placeholder={placeholder} value={value} error={error} touched={touched} />
                  );
                })}
                {(exibe_senha_antiga) ? (
                  <CampoSenhaAntiga senha_antiga={senha_antiga} />
                ) : null}
                <CampoSelectComErro
                  md={12}
                  id="estado"
                  label="Estado"
                  name="estado"
                  placeholder="Digite o seu estado"
                  data={lista_estados}
                  value={values.estado}
                  error={errors.estado}
                  touched={touched.estado}
                  label_item_vazio="Selecione"
                />
                <Col md={12} className="d-flex justify-content-end mt-5">
                  <ButtonGroup>
                    <Botao type="submit" color="primary">Salvar</Botao>
                    <Botao type="reset" color="danger">Limpar</Botao>
                    <BotaoLink to={voltarLink} color="info">Voltar</BotaoLink>
                  </ButtonGroup>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Col>
  );
}