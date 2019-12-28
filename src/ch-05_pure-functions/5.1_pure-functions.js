export const double = x => x * 2;

export const addToCart = (cart, product, quantity) => {
    return {
        ...cart,
        products: cart.products.concat([{product, quantity}])
    }
};
