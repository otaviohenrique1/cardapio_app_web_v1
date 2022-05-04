import { Field } from "formik";
import { Col } from "reactstrap";
import { ColumnProps } from "reactstrap/types/lib/Col";
import { LabelCampoInput } from "../LabelCampoInput";

interface CampoCheckboxProps {
  checkbox_id: string;
  checkbox_name: string;
  checkbox_value: string;
  checkbox_checked?: boolean;
  checkbox_label: string;
}

export function CampoCheckbox(props: CampoCheckboxProps) {
  const { checkbox_id ,checkbox_name, checkbox_value, checkbox_checked, checkbox_label } = props;

  return (
    <div className="d-flex flex-row">
      <Field
        id={checkbox_id}
        className="form-check me-2"
        type="checkbox"
        value={checkbox_value}
        name={checkbox_name}
        checked={checkbox_checked}
      />
      <LabelCampoInput htmlFor={checkbox_id} label={checkbox_label}/>
    </div>
  );
}

interface CampoCheckboxComContainerProps extends CampoCheckboxProps {
  md?: ColumnProps;
  xs?: ColumnProps;
  sm?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;
  xxl?: ColumnProps;
}

export function CampoCheckboxComContainer(props: CampoCheckboxComContainerProps) {
  const {checkbox_id, checkbox_name, checkbox_value, checkbox_checked, checkbox_label, md, xs, sm, lg, xl, xxl } = props;

  return (
    <Col
      md={md} xs={xs} sm={sm} lg={lg} xl={xl} xxl={xxl}
      className="pb-3 mb-3 border-dark border-bottom"
    >
      <CampoCheckbox
        checkbox_id={checkbox_id}
        checkbox_name={checkbox_name}
        checkbox_value={checkbox_value}
        checkbox_checked={checkbox_checked}
        checkbox_label={checkbox_label}
      />
    </Col>
  );
}

