import { Field } from "formik";
import { Col, Label } from "reactstrap";
import { ColumnProps } from "reactstrap/types/lib/Col";
import { AlertMensagemErro } from "../../AlertMensagem/AlertMensagemErro";

interface CampoInputProps {
  md: ColumnProps;
  label: string;
  id: string;
  name: string;
  type: CampoInputTypes;
  value: string;
  placeholder: string;
  error?: any;
  touched?: any;
}

export function CampoInput(props: CampoInputProps) {
  const { md, label, id, name, type, value, placeholder, error, touched } = props;

  return (
    <Col md={md} className="d-flex flex-column mt-3">
      <Label
        className="form-label"
        htmlFor={id}
      >{label}</Label>
      <Field
        className="form-control"
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
      {error && touched
        ? (<AlertMensagemErro>{error}</AlertMensagemErro>) : null}
    </Col>
  );
}