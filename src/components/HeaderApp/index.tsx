import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { MdMenuBook } from "react-icons/md";
import { ModalConfirmacao, ModalConfirmacaoProps } from "../Modals";
import { Titulo } from "../Titulo";
import { BiUserCircle } from "react-icons/bi";

interface HeaderAppProps {
  titulo: string;
}

export function HeaderApp(props: HeaderAppProps) {
  const { titulo } = props;
  const [aberto, setAberto] = useState<boolean>(false);
  const toggle = () => {
    setAberto(!aberto)
  };

  return (
    <Navbar color="dark" dark expand="sm" light>
      <NavbarBrand className="d-flex flex-row justify-content-center align-items-center" tag="div">
        <MdMenuBook size={30} />
        <Link className="fw-bold nav-link text-white" to='/'>{titulo}</Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={aberto}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/homepage" className="nav-link text-white">Inicio</Link>
          </NavItem>
        </Nav>
        {/* Colocar dados que o data_usuario_logado recebe */}
        <DropdownHeader data_usuario_logado={{
          id: "id",
          nome: "nome"
        }} />
      </Collapse>
    </Navbar>
  );
}

interface DropdownHeaderProps {
  data_usuario_logado: ClienteLogadoTypes;
}

function DropdownHeader(props: DropdownHeaderProps) {
  const { id, nome } = props.data_usuario_logado;

  const navigate = useNavigate();

  const [dropdownAberto, setDropdownAberto] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdownAberto(!dropdownAberto)
  };

  function logout() {
    const data_modal: ModalConfirmacaoProps = {
      icone: "warning",
      titulo: "Aviso",
      mensagem: "Deseja sair?"
    };
  
    ModalConfirmacao(data_modal)
      .then((result) => {
        if (result.isConfirmed) {
          sessionStorage.clear();
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Dropdown toggle={toggleDropdown} isOpen={dropdownAberto}>
      <DropdownToggle caret className="d-flex flex-row justify-content-center align-items-center">
        <Titulo tag="h6" className="m-0">{nome}</Titulo>
        <BiUserCircle size={30} className="ms-2" />
      </DropdownToggle>
      <DropdownMenu dark>
        <DropdownItem>
          <Link
            to={`/empresa/${id}`}
            className="dropdown-item w-100 text-center"
          >Perfil</Link>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          className="w-100 text-center"
          onClick={logout}
        >Sair</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
