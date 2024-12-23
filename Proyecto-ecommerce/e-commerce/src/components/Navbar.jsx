
import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router'
import { Container, Nav, Navbar } from "react-bootstrap"


function NavBar() {

    return (

        <Navbar>
            <Container>
                <Navbar.Brand href='/'>Tienda de ropa</Navbar.Brand>
                <Nav className= 'me-auto lg-0 logo'></Nav>
                <Nav.Link as={Link} to='/remeras'>Remeras</Nav.Link>
                <Nav.Link as={Link} to='/pantalones'>Pantalones</Nav.Link>
                <Nav.Link as={Link} to='/zapatillas'>Zapatillas</Nav.Link>
            </Container>
         
        </Navbar>
    )
}


export default NavBar