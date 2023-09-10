import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';

const $ = {
    query: document.querySelector.bind(document),
    queryAll: document.querySelectorAll.bind(document),
};

window.App = {};
App.store = Store;

// HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, );
// HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
// HTMLElement.prototype.$ = (s) => this.querySelector(s);
// HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

window.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    console.log(App.store);
});
