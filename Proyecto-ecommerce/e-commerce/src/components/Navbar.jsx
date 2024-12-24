
import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router'
import { Container, Nav, Navbar } from "react-bootstrap"


function NavBar() {

    return (

        <Navbar>
            <Container>
                <Navbar.Brand href='/'>Free-shop New York</Navbar.Brand>
                <Nav className= 'me-auto lg-0 '></Nav>
                <Nav.Link as={Link} to='/clothes'>Clothes</Nav.Link>
                <Nav.Link as={Link} to='/electronics'>Electronics</Nav.Link>
                <Nav.Link as={Link} to='/furniture'>Furniture</Nav.Link>
                <Nav.Link as={Link} to='/shoes'>Shoes</Nav.Link>
                <Nav.Link as={Link} to='/miscellaneous'>Miscellaneous</Nav.Link>
            </Container>
         
        </Navbar>
    )
}


export default NavBar