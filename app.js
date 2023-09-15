import Store from './services/Store.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

// Custom Components
import MenuPage from './components/MenuPage.js';
import OrderPage from './components/OrderPage.js';
import DetailsPage from './components/DetailsPage.js';
import ProductItem from './components/ProductItem.js';

const components = [MenuPage, OrderPage, DetailsPage, ProductItem];

const $ = {
    query: document.querySelector.bind(document),
    queryAll: document.querySelectorAll.bind(document),
    getById: document.getElementById.bind(document),
};

// HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, );
// HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
// HTMLElement.prototype.$ = (s) => this.querySelector(s);
// HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

window.$ = $;
window.App = { store: Store, router: Router };

window.addEventListener('DOMContentLoaded', () => {
    components.forEach((component) => {
        customElements.define(component.tag, component.element);
    });

    App.router.init();
    loadData();
});
