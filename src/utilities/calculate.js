const add = (num1, num2) => {
    return num1 + num2;
}
const mul = (num1, num2) => {
    return num1 * num2;
}

/* const array = [1, 23, 43];
const sumReducer = (previous, current) => previous + current;
const total = array.reduce(sumReducer, 0);
 */
const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export { add, mul, getTotalPrice as getTotal }