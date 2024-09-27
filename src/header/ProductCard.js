import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image.src} alt={product.image.alt} />
            <h3>{product.name}</h3>
            <p>SKU: {product.sku}</p>
            <p>Vendor: {product.vendor}</p>
            <p>Size: {product.size}</p>
            <div>
                <span>Rating: {product.rating.average} ({product.rating.numberOfReviews} reviews)</span>
            </div>
            <a href={product.link}>
                <button>View Product</button>
            </a>
        </div>
    );
};

export default ProductCard;