import { Form, Formik, FormikHelpers } from "formik";
import { To } from "react-router-dom";
import { ButtonGroup, Col, Row } from "reactstrap";
import { lista_estados } from "../../../utils/constantes";
import { Botao } from "../../Botoes/Botao";
import { BotaoLink } from "../../Botoes/BotaoLink";
import { CampoInput } from "../../Campos/CampoInput";
import { CampoSelect } from "../../Campos/CampoSelect";

interface FormularioUsuarioProps {
  initialValues: UsuarioTypes;
  validationSchema: any;
  onSubmit: (values: UsuarioTypes, helpers: FormikHelpers<UsuarioTypes>) => Promise<void>;
  voltarLink: To;
  enableReinitialize: boolean;
}

export function FormularioUsuario(props: FormularioUsuarioProps) {
  return (
    <Col md={12}>
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={props.onSubmit}
        enableReinitialize={props.enableReinitialize}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Row>
              <CampoInput
                md={12}
                id="nome"
                label="Nome"
                name="nome"
                type="text"
                placeholder="Digite o seu nome"
                value={values.nome}
                error={errors.nome}
                touched={touched.nome}
              />
              <CampoInput
                md={12}
                id="email"
                label="E-mail"
                name="email"
                type="email"
                placeholder="Digite o seu e-mail"
                value={`${values.email}`}
                error={errors.email}
                touched={touched.email}
              />
              <CampoInput
                md={12}
                id="senha"
                label="Senha"
                name="senha"
                type="password"
                placeholder="Digite a sua senha"
                value={values.senha}
                error={errors.senha}
                touched={touched.senha}
              />
              <CampoInput
                md={12}
                id="rua"
                label="Rua"
                name="rua"
                type="text"
                placeholder="Digite a sua rua"
                value={values.rua}
                error={errors.rua}
                touched={touched.rua}
              />
              <CampoInput
                md={12}
                id="numero"
                label="numero"
                name="numero"
                type="text"
                placeholder="Digite o numero da casa"
                value={`${values.numero}`}
                error={errors.numero}
                touched={touched.numero}
              />
              <CampoInput
                md={12}
                id="bairro"
                label="Bairro"
                name="bairro"
                type="text"
                placeholder="Digite o seu bairro"
                value={values.bairro}
                error={errors.bairro}
                touched={touched.bairro}
              />
              <CampoInput
                md={12}
                id="cidade"
                label="Cidade"
                name="cidade"
                type="text"
                placeholder="Digite a sua cidade"
                value={values.cidade}
                error={errors.cidade}
                touched={touched.cidade}
              />
              <CampoSelect
                md={12}
                id="estado"
                label="Estado"
                name="estado"
                placeholder="Digite o seu estado"
                data={lista_estados}
                value={values.estado}
                error={errors.estado}
                touched={touched.estado}
              />
              <CampoInput
                md={12}
                id="cep"
                label="cep"
                name="cep"
                type="text"
                placeholder="Digite o seu cep"
                value={`${values.cep}`}
                error={errors.cep}
                touched={touched.cep}
              />
              <CampoInput
                md={12}
                id="telefone"
                label="telefone"
                name="telefone"
                type="tel"
                placeholder="Digite o seu telefone"
                value={values.telefone}
                error={errors.telefone}
                touched={touched.telefone}
              />
              <Col md={12} className="d-flex justify-content-end mt-5">
                <ButtonGroup>
                  <Botao type="submit" color="primary">Salvar</Botao>
                  <Botao type="reset" color="danger">Limpar</Botao>
                  <BotaoLink to={props.voltarLink} color="info">Voltar</BotaoLink>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Col>
  );
}