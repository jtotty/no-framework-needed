import API from './API.js';

export async function loadData() {
    App.store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
    if (App.store.menu === null) {
        await loadData();
    }

    for (const category of App.store.menu) {
        for (const product of category.products) {
            if (product.id === Number(id)) {
                console.log(product);
                return product;
            }
        }
    }
}
