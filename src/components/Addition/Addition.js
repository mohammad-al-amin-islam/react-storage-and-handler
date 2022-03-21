import React from 'react';
import { add } from '../../utilities/calculate';


const Addition = () => {
    const first = 40;
    const second = 60;
    const total = add(first, second);
    return (
        <div>
            <h1>This is add component</h1>
            <p>Result:{total}</p>
        </div>
    );
};

export default Addition;