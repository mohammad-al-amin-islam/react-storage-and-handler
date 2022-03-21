import React from 'react';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    return (
        <div>
            <h1>Product Name:{name}</h1>
            <h3>Price:{price}</h3>
            <h3>ID:{id}</h3>
        </div>
    );
};

export default Cosmetic;