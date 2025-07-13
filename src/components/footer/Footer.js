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
                <p>Telegam: <a href="https://t.me/katseliger" target="_blank">https://t.me/katseliger</a></p>
                <p>Телефон: 8-993-550-69-33</p>
            </div>
            <div id="blockFooter2">
                <h5>Мы в соцсетях</h5>
                <nav>
                    <ul class="list">
                        <li>
                            <a href="https://vk.com/clubkatseliger" target="_blank">
                                <img src="./../../assets/footerImages/vk.png" alt="Vk" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/katseliger" target="_blank">
                                <img src="./../../assets/footerImages/fb.png" alt="Facebook" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/kat_seliger" target="_blank">
                                <img src="./../../assets/footerImages/insta.png" alt="Instagram" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCgSB69I0k9aXuqyiDiqFbNA" target="_blank">
                                <img src="./../../assets/footerImages/yt.png" alt="YouTube" loading="lazy">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;

        return footer;
    }
}