export default class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.styles = document.createElement('style');
        this.loadCSS()
    }

    // When the component is attached to the DOM
    connectedCallback() {
        const template = $.getById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }

    async loadCSS() {
        const request = await fetch('components/MenuPage.css');
        const css = await request.text();
        this.styles.textContent = css;
        this.root.appendChild(this.styles);
    }
}

customElements.define('menu-page', MenuPage);
