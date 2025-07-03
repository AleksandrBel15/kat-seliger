import './Hero.scss';

export default class Hero {
    constructor() {
        this.element = this.render();
    }

    render() {
        const sectionHero = document.createElement('section');
        sectionHero.className = 'hero';
        sectionHero.innerHTML = `
            <div class = "hero__content text-center">
                <h1 class="ubuntu-medium">Клуб активного туризма <br> Селигер</h1>
                <p class="hero__subtitle ubuntu-medium">Присоединяйтесь, мы вам рады!</p>
            </div>
        
            <button class="hero__scroll-down" aria-label="Прокрутить вниз">
                <a href="#about">
                    <svg class="hero__arrow" width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </a>
            </button>
        `;
        return sectionHero;
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