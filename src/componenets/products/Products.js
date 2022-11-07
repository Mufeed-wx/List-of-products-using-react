import React, { useState } from 'react'
import { phonesData } from './Products.data'
import { Button, Card } from 'react-bootstrap';
const Products = () => {
    const [items, setItems] = useState(phonesData)
    const decQty = (id) => {
        const newItem = items.map((item) =>
            item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        );
        setItems(newItem)
    }
    const incQty = (id) => {
        const newItem = items.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        setItems(newItem)
    }
    return (
        <div>
            <div className='p-3'>
                <h1 className='bg-info text-white ' >Products</h1>
            </div>
            {items.map((item) =>
                <div className='d-inline-flex p-2' key={item.id}>
                    <Card className="shadow  mb-5 bg-body rounded" style={{ width: '13rem', height: '32rem' }}>
                        <Card.Img className='p-2' style={{ height: '15rem' }} variant="top" src={require(`./assets/${item.image}.png`)} />
                        <Card.Body>
                            <Card.Title>{item.model}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <h5>Prize: ₹{item.price}</h5>
                            <p>
                                Qty:
                                <Button  onClick={() => decQty(item.id)} className='m-2' variant="primary">-</Button>
                                {item.qty}
                                <Button  onClick={() => incQty(item.id)} className='m-2' variant="primary">+</Button>
                            </p>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            )}

        </div>
    )
}

export default Products