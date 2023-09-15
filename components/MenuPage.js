class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });

        const template = $.getById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        this.styles = document.createElement('style');

        this.loadCSS((css) => {
            this.styles.textContent = css;
            this.root.appendChild(this.styles);
        });
    }

    // When the component is attached to the DOM
    connectedCallback() {
        this.render();

        window.addEventListener('app:menu-mutated', () => {
            this.render();
        });
    }

    loadCSS(callback) {
        fetch('components/MenuPage.css').then((response) => {
            response.text().then((css) => {
                callback(css);
            });
        });
    }

    render() {
        const menu = this.root.getElementById('menu');

        if (App.store.menu) {
            menu.innerHTML = '';

            for (let category of App.store.menu) {
                const liCategory = document.createElement('li');
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class="category"></ul>
                `;

                menu.appendChild(liCategory);

                category.products.map((product) => {
                    const item = document.createElement('product-item');
                    item.dataset.product = JSON.stringify(product);
                    liCategory.querySelector('ul').appendChild(item);
                });
            }
        } else {
            menu.innerHTML = 'Loading...';
        }
    }
}

export default {
    tag: 'menu-page',
    element: MenuPage,
};
