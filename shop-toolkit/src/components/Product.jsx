import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
// import { Link } from 'react-router-dom';

const Product = () => {

  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result))

  }, []);

  const dispatch = useDispatch()


  const cards = products.map(product => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: '10px' }}>
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
          <Button variant="primary" onClick={() => dispatch(add(product))} >Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <>

      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Product
