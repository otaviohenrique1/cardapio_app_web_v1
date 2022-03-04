import { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { ContainerApp } from "../../components/ContainerApp";
import { Lista, ListaVazia } from "../../components/Lista";
import api from "../../utils/api";

export function HomePage() {
  const [data, setData] = useState<ListaRefeicaoTypes[]>([]);

  useEffect(() => {
    api.get('/refeicao')
      .then((data) => {
        let lista = [...data.data];
        let listaFiltrada = lista.filter((item) => {
          return item.ativo !== false;
        });
        let validaLista = (listaFiltrada) ? listaFiltrada : [];
        setData(validaLista);
      })
      .catch((erro) => {
        console.log('Erro', `${erro}`);
      });
  }, []);

  return (
    <ContainerApp titulo="Cardapio">
      <Row className="mt-3">
        {(data.length === 0) ? (
          <ListaVazia />
        ) : (
          <Lista data={data} />
        )}
      </Row>
    </ContainerApp>
  );
}
