import CartList from './CartList'
import Button from 'react-bootstrap/esm/Button'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router'
function Cart () {

    const {cart, getTotal} = useCart()

    if(cart.length === 0) {

        <h2>No hay productos aun en el carrito</h2>

    } return  (            
            <CartList items= {cart}>
            <p>Total : ${getTotal()}</p>
            <Button as={Link} to='/checkout'>Finalizar compra</Button>
            </CartList>
    )
}
export default Cart