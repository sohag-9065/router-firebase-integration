import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is Products</h2>
            <p>Current user: {user ? user.displayName : "No Body"}</p>
        </div>
    );
};

export default Products;