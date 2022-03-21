const addToLocalStorage = (id) => {
    let shoppingCart;
    //get shopping cart
    const savedCart = localStorage.getItem('shopping-cart')
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
    }
    else {
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    console.log(quantity);
    if (quantity) {
        const updateQuantity = quantity + 1;
        shoppingCart[id] = updateQuantity;

    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

    /* const item = localStorage.getItem(id);
    if (item) {
        const updateQuantity = parseInt(item) + 1;
        localStorage.setItem(id, updateQuantity);
    }
    else {
        localStorage.setItem(id, 1);
    } */
}


const deleteFromLocalStorage = id => {
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        const shoppingCart = JSON.parse(getCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }

}



const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}



export { addToLocalStorage, deleteFromLocalStorage, deleteShoppingCart };