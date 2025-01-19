
import { getProduct } from '../firebase/db'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import ItemDetail from './ItemDetail'


function ItemDetailContainer () {

    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect (() => {

        getProduct(id)
        .then(res=> setItem(res))

    }, [id] )

    return (

        <div><ItemDetail item={item}/></div>
        
    )
}

export default ItemDetailContainer