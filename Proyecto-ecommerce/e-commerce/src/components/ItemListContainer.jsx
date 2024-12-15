import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItemListContainer({ label, bgc }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [])

    return (
        <Container
            style={{ backgroundColor: bgc }}

            placeholder={'Bienvenido a la tienda!!'} >
            {label = 'Bienvenidos a la tienda!!!'}

            <Row>
                {items.map(item => (
                    <Col key={item.id}  >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.thumbnail} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    ${item.price}
                                </Card.Text>
                                <Button variant="primary">Detalles</Button>
                            </Card.Body>
                        </Card></Col>))
                }
            </Row>
        </Container>
    )

}

export default ItemListContainer