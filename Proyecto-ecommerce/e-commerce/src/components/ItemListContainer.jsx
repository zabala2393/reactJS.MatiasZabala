import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router'

function ItemListContainer({}) {    

    const [items, setItems] = useState([])
    const {id} = useParams()
     
    useEffect(() => {  
      
        
        const urlBase = 'https://api.escuelajs.co/api/v1/products'
        const urlByCategory = `https://api.escuelajs.co/api/v1/categories/${id}/products`

            fetch (id ? urlByCategory : urlBase)
            .then (res => res.json())
            .then (res => setItems(res))


    }, [id])

    return (
        <ItemList items={items}></ItemList>
    )

}

export default ItemListContainer