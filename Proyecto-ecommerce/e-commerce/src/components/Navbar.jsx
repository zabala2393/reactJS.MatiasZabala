
import CartWidget from "./CartWidget"
import { Link, Navigate, NavLink } from 'react-router'
import { Container, Nav, Navbar } from "react-bootstrap"


function NavBar() {

    return (

        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to='/'>Free-shop New York</Navbar.Brand>
                <Nav.Link as={Link} to='/categories/1/products'>Clothes</Nav.Link>
                <Nav.Link as={Link} to='/categories/2/products'>Electronics</Nav.Link>
                <Nav.Link as={Link} to='/categories/3/products'>Furniture</Nav.Link>
                <Nav.Link as={Link} to='/categories/4/products'>Shoes</Nav.Link>
                <Nav.Link as={Link} to='/categories/5/products'>Miscellaneous</Nav.Link>
                <Nav.Link as={Link} to='/cart'><CartWidget/></Nav.Link>
            </Container>
         
        </Navbar>
    )
}


export default NavBar