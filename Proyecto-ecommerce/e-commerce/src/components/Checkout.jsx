import Button from "react-bootstrap/esm/Button";
import Form  from "react-bootstrap/Form";
import {useCart} from '..context/CartContext'
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";


function Checkout () {

    const {cart, getTotal} = useCart()

    const handleSubmit= (e) => {

        e.preventDefault()

        const form = e.target
        const [name, email, phone] = form
        const order = {

            comprador: {name: name.value, email: email.value, phone: phone.value},
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }

        createOrder(order)
    }
    return (
    <div>
        <Form onSubmit={handleSubmit}>
            <h3></h3>

            <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type = "text" placeholder='Nombre y apellido'></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type = "email" placeholder=''></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label controlId="phone" >Numero de Telefono</Form.Label>
                <Form.Control type = "text" placeholder='+54()...' required></Form.Control>
            </Form.Group>

            <Button type="submit">
                Finalizar Compra
            </Button>
           
        </Form>
    </div>
    )

}