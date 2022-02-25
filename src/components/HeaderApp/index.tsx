import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { MdMenuBook } from "react-icons/md";

interface HeaderAppProps {
  titulo: string;
}

export function HeaderApp(props: HeaderAppProps) {
  const [aberto, setAberto] = useState<boolean>(false);
  const toggle = () => {
    setAberto(!aberto)
  };

  return (
    <Navbar color="dark" dark expand="sm" light>
      <NavbarBrand className="d-flex flex-row justify-content-center align-items-center">
        <MdMenuBook size={30} />
        <Link className="fw-bold nav-link text-white" to='/'>{props.titulo}</Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={aberto}>
        <Nav className="me-auto d-flex justify-content-between w-100" navbar>
          <NavItem>
            <Link to="/" className="nav-link text-white">Inicio</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
