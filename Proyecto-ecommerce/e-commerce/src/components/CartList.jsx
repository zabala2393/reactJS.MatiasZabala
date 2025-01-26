import { ListGroupItem, ListGroup, Button } from "react-bootstrap"
import { useCart } from "../context/CartContext"
import { useState } from "react"
import ItemCount from "./ItemCount"


function CartList(item) {

    const { cart, getQty, getTotal } = useCart()

    const [count, setCount] = useState(0)
    const handleAdd = () => te
    const handleSubtract = () => te

    return (

        <ListGroup>{cart.map(item =>
        (<ListGroupItem key={item.id}>
            {item.name}x{item.quantity}
            ${item.price}
            <Button onClick={handleSubtract}>-</Button>
            <Button onClick={handleAdd}>+</Button>
            

        </ListGroupItem>))}
        </ListGroup>

    )

}

export default CartList