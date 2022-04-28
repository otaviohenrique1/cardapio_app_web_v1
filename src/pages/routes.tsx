import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { Pagina404 } from "./Pagina404";
import { RefeicaoDados } from "./RefeicaoDados";
import { ClienteCadastro } from "./Cliente/ClienteCadastro";
import { ClienteEdicao } from "./Cliente/ClienteEdicao";
import { ClienteFichaDados } from "./Cliente/ClienteFichaDados";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente/cadastro" element={<ClienteCadastro/>} />
        <Route path="/cliente/:id" element={<ClienteFichaDados/>} />
        <Route path="/cliente/:id/edicao" element={<ClienteEdicao />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/refeicao/:id" element={<RefeicaoDados />} />
        <Route element={<Pagina404 />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}