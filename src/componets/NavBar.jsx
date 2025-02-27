import { Navbar, Nav, NavbarCollapse } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar bg='primary' expand='lg'>
        <Navbar.Brand>
            Recetas Saludables
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
