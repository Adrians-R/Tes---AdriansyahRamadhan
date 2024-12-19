import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'HP 62 Black Ink Cartridge',
      price: 9.49,
      oldPrice: null,
      image: '/assets/hp62.jpg',
    },
    {
      id: 2,
      name: 'Canon MF 3110 Toner',
      price: 36.45,
      oldPrice: null,
      image: '/assets/canon-toner.jpg',
    },
    {
      id: 3,
      name: 'HP 62 Black Ink Cartridge',
      price: 5.99,
      oldPrice: 9.49,
      image: '/assets/hp62.jpg',
    },
  ];

  return (
    <section className="featured-products">
      <h2>FEATURED PRODUCTS</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              {product.oldPrice && (
                <span className="old-price">${product.oldPrice}</span>
              )}{' '}
              ${product.price}
            </p>
            <button>ADD TO CART</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
