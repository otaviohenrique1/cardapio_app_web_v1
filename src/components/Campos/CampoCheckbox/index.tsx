import { Field } from "formik";
import { ReactNode } from "react";
import { Col, Label } from "reactstrap";

interface CampoCheckboxProps {
  name: string;
  children: ReactNode;
  checked?: boolean;
}

export function CampoCheckbox(props: CampoCheckboxProps) {
  const { name, children, checked } = props;

  return (
    <Col md={12} className="d-flex flex-row">
      <Field
        className="form-check"
        type="checkbox"
        name={name}
        checked={checked}
      />
      <Label className="form-label ms-2">{children}</Label>
    </Col>
  );
}
