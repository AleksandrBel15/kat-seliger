import './Hero.scss';

export default class Hero {
    constructor() {
        this.element = this.render();
    }

    render() {
        const section = document.createElement('section');
        section.className = 'hero';
        section.innerHTML = `
        <div class = "hero__content">
            <h1>Клуб активного туризма <br> Селигер</h1>
            <p class="hero__subtitle">Присоединяйтесь, мы вам рады!</p>
        </div>
        <button class="hero__scroll-down">
            <span class="hero__scroll-arrow"></span>
        </button>
        `;
        return section;
    }

    addEventListeners() {
        const button = document.querySelector('.hero__scroll-down');
        button.addEventListener('click', this.handleScrollClick);
    }

    handleScrollClick = () => { // Стрелочная функция для контекста
        window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: 'smooth'
        });
    };
}