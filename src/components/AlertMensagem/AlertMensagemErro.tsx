import { ReactNode } from "react";
import { Alert, AlertProps } from "reactstrap";

interface AlertMensagemErroProps extends AlertProps {
  children: ReactNode;
}

export function AlertMensagemErro(props: AlertMensagemErroProps) {
  return (
    <Alert
      color="danger"
      {...props}
    >{props.children}</Alert>
  );
}
