import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { remove } from '../store/cartSlice';


const Cart = () => {

    const products = useSelector(state => state.cart);

    const dispatch = useDispatch()
    const removeItem = (id) => {
        dispatch(remove(id))
    }

    const cards = products.map(product => (
        <div className="col-md-12" key={product.id} style={{ marginBottom: '10px' }}>
          <Card className="h-100">
            <div className="text-center">
              <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
            </Card.Body>
            <Card.Text>
              {product.price}$
            </Card.Text>
            <Card.Footer style={{ background: 'white' }}>
              <Button variant="danger" onClick={() => removeItem(product.id)} >Remove Item</Button>
            </Card.Footer>
          </Card>
        </div>
    ))

    return (
        <>
        
            <div className="row">
                {cards}
            </div>
        
        </>
    )
}

export default Cart
