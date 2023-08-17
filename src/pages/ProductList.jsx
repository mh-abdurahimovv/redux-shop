import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { getProducts, setPriceFilter, setCategoryFilter } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const { data: products, status, filters } = useSelector(state => state.products);

  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);



  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    dispatch(setPriceFilter(event.target.value));
  };



  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    dispatch(setCategoryFilter(event.target.value));
  };

  if (status === StatusCode.LOADING) {
    return <p>LOADING...</p>;
  }

  if (status === StatusCode.ERROR) {
    return <p>Something went wrong. Please try again later</p>;
  }

  const filteredProducts = products.filter(product => {
    const priceFilter = filters.price ? product.price <= filters.price : true;
    const brandFilter = filters.brand ? product.brand === filters.brand : true;
    const categoryFilter = filters.category ? product.category === filters.category : true;
    return priceFilter && brandFilter && categoryFilter;
  });
  const productCards = filteredProducts.map(product => (
    <ProductCard key={product.id} product={product} /> // Используйте компонент ProductCard
  ));



  return (
    <>
      <h1>Product Dashboard</h1>

      <div className="mb-3 d-flex align-items-start">
        <Form.Label key='primary' variant='primary' className="text-start ">
          Filter by Price:
        </Form.Label>
        <Form.Select id="inputPrice" value={selectedPrice} onChange={handlePriceChange}>
          <option value="">All</option>
          <option value={10}>$10 or less</option>
          <option value={20}>$20 or less</option>
          <option value={30}>$30 or less</option>
        </Form.Select>
      </div>
      <br />
      <div className="mb-3 d-flex align-items-start">
        <Form.Label key='success' variant='success' className="text-start ">
          Filter by Price:
        </Form.Label>
        <Form.Select id="inputCategory" value={selectedCategory}  onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men clothing</option>
          <option value="women's clothing">Women clothing</option>
          <option value="jewelery">Jewelery</option>
        </Form.Select>
      </div>
      <br />
      <div className="row">
        {productCards}
      </div>
    </>
  );
};

export default ProductList;
