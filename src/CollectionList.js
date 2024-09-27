import React from 'react';
import ProductCard from './header/ProductCard';

const CollectionList = ({ collectionTitle, products }) => {
    return (
        <div className="collection-list">
            <div className="collection-heading">
                <span className="collection-title">{collectionTitle}</span>
                <span className="collection-viewAll" style={{ cursor: 'pointer', color: 'blue' }}>View All</span>
            </div>
            <ul className="collectionList">
                {products.map(product => (
                    <li className="collection-item" key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollectionList;