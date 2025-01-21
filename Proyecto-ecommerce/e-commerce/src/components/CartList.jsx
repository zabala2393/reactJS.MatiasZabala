
import ListGroup from 'react-bootstrap/ListGroup'
import  ListGroupItem from 'react-bootstrap/ListGroupItem'


function CartList ({items}) {
    
    <div>
    <ListGroup>
        {items.map(item => (<ListGroupItem>{item.name}x{item.quantity} ${item.price}</ListGroupItem>))}       
    </ListGroup>
    </div>

}

export default CartList