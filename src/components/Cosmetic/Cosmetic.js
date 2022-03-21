import React from 'react';
import { addToLocalStorage } from '../../utilities/fakeDB';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        addToLocalStorage(id);
    }
    // const addCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h1>Product Name:{name}</h1>
            <h3>Price: ${price}</h3>
            <h3>ID:{id}</h3>
            <button onClick={() => addToCart(id)}>Add Item</button>
        </div >
    );
};

export default Cosmetic;