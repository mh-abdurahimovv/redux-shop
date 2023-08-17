import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductAmount from './ProductAmount';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3" key={product.id} style={{ marginBottom: '10px' }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
        </Card.Body>
        <ProductAmount price={product.price} />
        <Card.Footer style={{ background: 'white' }}>
          <Link to={`/about/${product.id}`}>
            <Button variant="primary">Learn more</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
