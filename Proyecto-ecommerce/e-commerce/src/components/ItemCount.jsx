import { useState } from 'react'

function ItemCount() {

    const [count, setCount] = useState(0)

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
            <button style={{backgroundColor: 'beige'}}>Agregar al carrito</button>
        </div>

    )

}

export default ItemCount