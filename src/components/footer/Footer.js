import './Footer.scss';

export default class Footer {
    constructor() {
        this.element = this.#render();
    }

    #render() {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `
            <div id="blockFooter1">
                <p>E-mail: kat-seliger@ya.ru</p>
                <p>Telegam: <a href="https://t.me/katseliger" target="_blank">t.me/katseliger</a></p>
                <p>Телефон: 8-993-550-69-33</p>
            </div>
            <div id="blockFooter2">
                <h6>Мы в соцсетях</h6>
                <nav>
                    <ul class="list">
                        <li>
                            <a href="https://vk.com/clubkatseliger" target="_blank" aria-label="Вконтакте">
                                <img src="./../../assets/footerImages/vk.webp" alt="Вконтакте" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/katseliger" target="_blank" aria-label="Фейсбук">
                                <img src="./../../assets/footerImages/fb.webp" alt="Фейсбук" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/kat_seliger" target="_blank" aria-label="Инстаграм">
                                <img src="./../../assets/footerImages/insta.webp" alt="Инстаграм" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCgSB69I0k9aXuqyiDiqFbNA" target="_blank" aria-label="Ютуб">
                                <img src="./../../assets/footerImages/yt.webp" alt="Ютуб" loading="lazy">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;

        return footer;
    }
}