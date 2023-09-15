const Store = {
    menu: [],
    cart: [],
};

const proxiedStore = new Proxy(Store, {
    set(target, property, value) {
        target[property] = value;

        if (property === 'menu') {
            window.dispatchEvent(new Event('app:menu-mutated'));
        }

        if (property === 'cart') {
            window.dispatchEvent(new Event('app:cart-mutated'));
        }

        return true;
    }
});

export default proxiedStore;
