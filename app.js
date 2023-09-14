import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// Custom Elements
import MenuPage from './components/MenuPage.js';
import OrderPage from './components/OrderPage.js';
import DetailsPage from './components/DetailsPage.js';

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

window.App = {};
App.store = Store;
App.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    App.router.init();
});
