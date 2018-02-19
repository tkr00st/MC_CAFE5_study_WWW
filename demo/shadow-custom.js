export default function ()  {
    const hostSection = document.querySelector('.container:nth-child(2)');
    const shadowRoot = hostSection.attachShadow({mode: 'open'});

    shadowRoot.textContent = 'メンバーズキャリア';
}