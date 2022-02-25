import { ReactNode } from "react";
import { Container } from "reactstrap";
import { HeaderApp } from "../HeaderApp";

interface ContainerAppProps {
  titulo: string;
  children: ReactNode;
}

export function ContainerApp(props: ContainerAppProps) {
  return (
    <div className="bg-transparent">
      <HeaderApp titulo={props.titulo} />
      <Container
        className="bg-transparent"
      >{props.children}</Container>
    </div>
  );
}