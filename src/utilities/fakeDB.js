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
export { addToLocalStorage };