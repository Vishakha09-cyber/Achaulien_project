import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = [
        {
            "id": "1",
            "name": "Classic Original Milk Tea",
            "sku": "F08129",
            "vendor": "E-TIME",
            "size": "24 X 200ml",
            "image": {
                "src": "//testdemostore1221.myshopify.com/cdn/shop/files/453mwiq9_2x-removebg-preview.png?v=1725255209",
                "alt": "Classic Original Milk Tea"
            },
            "rating": {
                "average": 4.75,
                "numberOfReviews": 4
            },
            "link": "/products/100-pure-sesame-oil-6x500ml-twin-dragon-5"
        },
        // Add other products here
        {
            "id": "2",
            "name": "Green Tea with Jasmine",
            "sku": "G12345",
            "vendor": "GreenTea Co.",
            "size": "20 X 250ml",
            "image": {
                "src": "//testdemostore1221.myshopify.com/cdn/shop/files/greenteajasmine.png?v=1725255209",
                "alt": "Green Tea with Jasmine"
            },
            "rating": {
                "average": 4.5,
                "numberOfReviews": 10
            },
            "link": "/products/green-tea-with-jasmine"
        },
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;