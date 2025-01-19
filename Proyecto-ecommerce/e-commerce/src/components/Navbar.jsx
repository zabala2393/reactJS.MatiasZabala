
import CartWidget from "./CartWidget"
import { Link, Navigate, NavLink } from 'react-router'
import { Container, Nav, Navbar } from "react-bootstrap"


function NavBar() {

    return (

        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to='/'>Free-shop New York</Navbar.Brand>
                <Nav.Link as={Link} to='/category/clothes'>Clothes</Nav.Link>
                <Nav.Link as={Link} to='/category/electronics'>Electronics</Nav.Link>
                <CartWidget></CartWidget>               
            </Container>
         
        </Navbar>
    )
}


export default NavBar