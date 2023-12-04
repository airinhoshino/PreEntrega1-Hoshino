import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

//componente de la barra de navegación
const NavBar  = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#inicio">Art of Tea</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#sucursales">Sucursales</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#productos/blends">Blends</NavDropdown.Item>
                <NavDropdown.Item href="#productos/kits">
                  Kits
                </NavDropdown.Item>
                <NavDropdown.Item href="#productos/libros">Libros</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#productos/ofertas">
                  Ofertas
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget /> 
        </Container>
      </Navbar>
    );

}

export default NavBar;

