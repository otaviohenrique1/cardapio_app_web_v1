import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";

export function Pagina404() {
  return (
    <ContainerApp titulo="Cardapio">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column mt-5">
        <Titulo tag="h1" className="fw-bold">Erro 404</Titulo>
        <Titulo tag="h2" className="fw-light">Pagina não encontrada</Titulo>
      </div>
    </ContainerApp>
  );
}