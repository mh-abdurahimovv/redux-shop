import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { remove, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import ProductAmount from '../components/ProductAmount';


const Cart = () => {

  const products = useSelector(state => state.cart);

  const dispatch = useDispatch()
  const removeItem = (id) => {
    dispatch(remove(id));
  }

  const increaseQuantityHandler = (id) => {
    dispatch(increaseQuantity({ id }));
  }

  const decreaseQuantityHandler = (id) => {
    dispatch(decreaseQuantity({ id }));
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
        <ProductAmount price={product.price} />
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeItem(product.id)}>Remove Item</Button>
          <Button variant="success" onClick={() => increaseQuantityHandler(product.id)}>+</Button>
          <Button variant="warning" onClick={() => decreaseQuantityHandler(product.id)}>-</Button>
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
