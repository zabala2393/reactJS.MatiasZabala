import CartList from './CartList'
import Button from 'react-bootstrap/esm/Button'
import { useCart } from '../context/CartContext'

function Cart () {

    const {cart, getTotal} = useCart()

    if(cart.length === 0) {

        <h2>No hay productos aun en el carrito</h2>
    }

    return (

        <div>
            <CartList items= {cart}/>
            <p>Total : ${getTotal()}</p>
            <Button>Finalizar compra</Button>
        </div>

    )
}
export default Cart