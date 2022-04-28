import { ReactNode } from "react";
import { Alert, AlertProps } from "reactstrap";

interface AlertMensagemErroProps extends AlertProps {
  children: ReactNode;
}

export function AlertMensagemErro(props: AlertMensagemErroProps) {
  const { children } = props;

  return (
    <Alert color="danger" {...props}>{children}</Alert>
  );
}
