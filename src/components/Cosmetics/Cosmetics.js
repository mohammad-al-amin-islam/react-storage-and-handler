import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('https://cosmetic.free.beeceptor.com/')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, [])
    return (
        <div>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic}
                    key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;