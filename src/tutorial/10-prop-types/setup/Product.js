import React from 'react';
import PropTypes from 'prop-types'; 
import defaultImg from '../../../assets/default-image.jpeg';

const Product = ({name, image, price}) => {
  return <article className='product'>
    <img src={image.url || defaultImg} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p>

  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired, 
  name: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
}; 

Product.defaultProps = {
  name: 'default name', 
  price: 3.99, 
  image: defaultImg
}

export default Product;
