import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import ItemDetail from './ItemDetail'


function ItemDetailContainer () {

    const [item, setItem] = useState()
    const {id} = useParams()

    useEffect (() => {
        fetch (`https://dummyjson.com/products/${id}`)
        .then (res => res.json())
        .then (res=> setItem(res))
    }, [id] )

    return (

        <div><ItemDetail item={item}/></div>
        
    )
}

export default ItemDetailContainer