import { getProductById } from './Menu.js';

export async function addToCart(id) {
    const product = await getProductById(id);
    const results = app.store.cart.filter((cartItem) => {
        return cartItem.product.id == id;
    });

    if (results.length === 1) {
        // Product already in the cart - update
        app.store.cart = app.store.cart.map((cartItem) => {
            return cartItem.product.id == id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem;
        });
    } else {
        app.store.cart = [...app.store.cart, { product, quantity: 1 }];
    }
}

export function removeFromCart(id) {
     app.store.cart = app.store.cart.filter((item) => item.product.id != id);
}
