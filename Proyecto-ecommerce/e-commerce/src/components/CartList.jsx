
import ListGroup from 'react-bootstrap/ListGroup'
import  ListGroupItem from 'react-bootstrap/ListGroupItem'



function CartList ({items}) {
    
    <ListGroup>
        {items.map(item => (<ListGroupItem>{item.title}x{item.quantity} ${item.price}</ListGroupItem>))}       
    </ListGroup>

}

export default CartList