export default class McLogo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const mcURL = 'https://www.memberscareer.co.jp/';
        const mcLogoSrc = 'https://www.memberscareer.co.jp/assets/img/logo.png';
        const mcLogoAlt = 'メンバーズキャリア';
        this.innerHTML = `
            <a href="${mcURL}">
                <img src="${mcLogoSrc}" alt="${mcLogoAlt}">
            </a>
            `;
    }
}