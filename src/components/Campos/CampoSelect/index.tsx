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
  return (
    <Col md={props.md} className="d-flex flex-column mt-3">
      <Label
        className="form-label"
        htmlFor={props.id}
      >{props.label}</Label>
      <Field
        className="form-select"
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        as="select"
      >
        <option value="">Selecione</option>
        {props.data.map((item, index) => {
          const { valor, texto } = item;
          const data = { texto, valor };
          return (
            <CampoSelectItem data={data} key={index} />
          );
        })}
      </Field>
      {props.error && props.touched
        ? (<AlertMensagemErro>{props.error}</AlertMensagemErro>) : null}
    </Col>
  );
}

interface CampoSelectItemProps {
  data: CampoSelectItemBaseTypes;
}

function CampoSelectItem(props: CampoSelectItemProps) {
  return (
    <option value={props.data.valor}>
      {props.data.texto}
    </option>
  );
}
