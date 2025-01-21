import { useState, useContext} from 'react'
import {CartContext} from '../context/CartContext'


function ItemCount({item}) {

    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleAddToCart  = () => {

       addToCart({...item, quantity: count})

    }

    const handleAdd = () => {

        setCount(count + 1)

    }

    const handleSubtract = () => {

        setCount(count - 1)

    }

    return (

        <div>
            <p style={{ border: 'solid 1 white' }}>{count}</p>
            <button style={{ backgroundColor: 'red' }} onClick={handleSubtract}>-</button>
            <button style={{ backgroundColor: 'green' }} onClick={handleAdd}>+</button>
            <button style={{backgroundColor: 'beige'}} onClick={handleAddToCart}>Agregar al carrito</button>
        </div>

    )

}

export default ItemCount