import { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { ContainerApp } from "../../components/ContainerApp";
import { ListaRefeicao } from "../../components/Listas/ListaRefeicao";
import { ListaVazia } from "../../components/Listas/ListaVazia";
import { ModalErroDadosNaoCarregados } from "../../components/Modals";
import api, { id_empresa_cliente } from "../../utils/api";

export function HomePage() {
  const [data, setData] = useState<RefeicaoListaTypes[]>([]);

  useEffect(() => {
    api.get(`refeicao/cardapio/${id_empresa_cliente}`)
      .then((data) => {
        let lista = [...data.data];
        let listaFiltrada = lista.filter((item) => {
          return item.ativo !== false;
        });
        let validaLista = (listaFiltrada) ? listaFiltrada : [];
        setData(validaLista);
      })
      .catch((error) => {
        ModalErroDadosNaoCarregados();
        console.error(error);
      });
  }, []);

  return (
    <ContainerApp titulo="Cardapio">
      <Row className="mt-3">
        {(data.length === 0) ? (
          <ListaVazia />
        ) : (
          <ListaRefeicao data={data} />
        )}
      </Row>
    </ContainerApp>
  );
}
