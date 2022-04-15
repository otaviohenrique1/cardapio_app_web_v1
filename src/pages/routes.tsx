import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { Pagina404 } from "./Pagina404";
import { RefeicaoDados } from "./RefeicaoDados";
import { ClienteCadastro } from "./Cliente/ClienteCadastro";
import { ClienteDados } from "./Cliente/ClienteDados";
import { ClienteEdicao } from "./Cliente/ClienteEdicao";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente/cadastro" element={<ClienteCadastro/>} />
        <Route path="/cliente/:id" element={<ClienteDados/>} />
        <Route path="/cliente/:id/edicao" element={<ClienteEdicao />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/refeicao/:id" element={<RefeicaoDados />} />
        <Route element={<Pagina404 />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}