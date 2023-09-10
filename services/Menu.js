import API from './API.js';

export async function loadData() {
    App.store.menu = await API.fetchMenu();
}
