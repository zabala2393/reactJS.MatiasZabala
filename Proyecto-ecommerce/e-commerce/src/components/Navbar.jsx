
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
                <Nav.Link as={Link} to='/category/shoes'>Shoes</Nav.Link>
                <Nav.Link as={Link} to='/category/makeup'>Makeup</Nav.Link>                
                <Nav.Link  as={Link} to='/cart'><CartWidget></CartWidget></Nav.Link>              
            </Container>
         
        </Navbar>
    )
}


export default NavBar