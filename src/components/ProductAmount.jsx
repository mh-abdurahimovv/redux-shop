import Card from 'react-bootstrap/Card'

const ProductAmount = ({ price } ) => {
  return (
    <Card.Text>
      {price}$
    </Card.Text>
  )
}

export default ProductAmount
