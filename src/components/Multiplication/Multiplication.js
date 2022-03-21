import React from 'react';
import { mul } from '../../utilities/calculate';

const Multiplication = () => {
    const num1 = 20;
    const num2 = 30;
    const total = mul(num1, num2)
    return (
        <div>
            <h1>This is Multiplication Component</h1>
            <p>Result:{total}</p>
        </div>
    );
};
export default Multiplication;