import { Field } from "formik";
import { Col, Label } from "reactstrap";
import { ColumnProps } from "reactstrap/types/lib/Col";
import { AlertMensagemErro } from "../../AlertMensagem/AlertMensagemErro";

interface CampoSelectItemBaseTypes {
  valor: string | number;
  texto: string | number;
}

interface CampoSelectProps {
  md: ColumnProps;
  label: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  error?: any;
  touched?: any;
  data: CampoSelectItemBaseTypes[]
}

export function CampoSelect(props: CampoSelectProps) {
  const { md, label, id, name, value, placeholder, error, touched, data } = props;

  return (
    <Col md={md} className="d-flex flex-column mt-3">
      <Label className="form-label" htmlFor={id}>{label}</Label>
      <Field
        className="form-select"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        as="select"
      >
        <option value="">Selecione</option>
        {data.map((item, index) => {
          const { valor, texto } = item;
          const data = { texto, valor };
          return (
            <CampoSelectItem data={data} key={index} />
          );
        })}
      </Field>
      {error && touched ? (<AlertMensagemErro>{error}</AlertMensagemErro>) : null}
    </Col>
  );
}

interface CampoSelectItemProps {
  data: CampoSelectItemBaseTypes;
}

function CampoSelectItem(props: CampoSelectItemProps) {
  const { valor, texto } = props.data;

  return (
    <option value={valor}>{texto}</option>
  );
}
