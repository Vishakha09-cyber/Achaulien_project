import React from 'react';
import ProductList from './ProductList';

const CollectionList = () => {
    return (
        <div className="collection-list">
            <div class="collection_heading">
                <span class="collection_title">{collectionTitle}</span>
                <span class="collection_viewAll">View All</span>
            </div>
            <ul class="collectionList">
                <li class="collectionItem"><ProductList /></li>
                <li class="collectionItem"><ProductList /></li>
                <li class="collectionItem"><ProductList /></li>
                <li class="collectionItem"><ProductList /></li>
            </ul>
            
        </div>
    );
};

export default CollectionList;