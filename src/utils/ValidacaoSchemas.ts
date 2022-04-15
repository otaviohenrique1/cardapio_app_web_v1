import * as Yup from "yup";
import { Mensagem } from "./Mensagem";
import {
  EMAIL_INVALIDO,
  valor_minimo_carateres,
  MINIMO_CARACTERES,
  valor_maximo_carateres,
  MAXIMO_CARACTERES
} from "./constantes";

const nome = Yup
  .string()
  .required(Mensagem.MensagemErro("nome"));

const email = Yup
  .string()
  .email(Mensagem.MensagemSimples(EMAIL_INVALIDO))
  .required(Mensagem.MensagemErro("email"));

const senha = Yup
  .string()
  .min(valor_minimo_carateres, MINIMO_CARACTERES)
  .max(valor_maximo_carateres, MAXIMO_CARACTERES)
  .required(Mensagem.MensagemErro("senha"));

export const valida_rua = Yup
  .string()
  .required(Mensagem.MensagemErro('rua'));

export const valida_numero = Yup
  .string()
  .required(Mensagem.MensagemErro('numero'));

export const valida_bairro = Yup
  .string()
  .required(Mensagem.MensagemErro('bairro'));

export const valida_cidade = Yup
  .string()
  .required(Mensagem.MensagemErro('cidade'));

export const valida_estado = Yup
  .string()
  .required(Mensagem.MensagemErro('estado'));

export const valida_cep = Yup
  .string()
  .required(Mensagem.MensagemErro('cep'));

export const valida_telefone = Yup
  .string()
  .required(Mensagem.MensagemErro('telefone'));

export const validacaoSchemaFormularioUsuario = Yup.object().shape({
  nome, email, senha, valida_rua, valida_numero, valida_bairro,
  valida_cidade, valida_estado, valida_cep, valida_telefone
});

export const schemaValidacaoFormularioLogin = Yup.object().shape({
  email, senha,
});
