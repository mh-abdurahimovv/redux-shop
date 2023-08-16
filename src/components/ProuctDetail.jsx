import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/cartSlice';
import { getProductById } from '../store/productSlice';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(state => state.products.data.find(item => item.id === parseInt(productId)));

    useEffect(() => {
        dispatch(getProductById(productId));
    }, [dispatch, productId]);

    const addToCart = (product) => {
        dispatch(add(product))
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <>
            <div className="row">
                <div className="col-md-8 mx-auto"  style={{ marginBottom: '10px' }}>
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
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;
