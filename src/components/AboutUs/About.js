import './About.scss';

export default class About {
    constructor() {
        this.element = this.#render();
    }

    #render() {
        const sectionAbout = document.createElement('section');
        sectionAbout.className = 'about';
        sectionAbout.classList.add('flex-center');
        sectionAbout.innerHTML = `
            <h2 class="about__title ubuntu-medium">О нас</h2>
            <div class="about__cards flex-center ubuntu-medium">
                <div class="about__card flex-center text-center">Клуб Активного Туризма "Селигер" (КАТ "Селигер") - для тех, кто любит активный отдых, весёлую компанию, путешествия, приключения и озеро Селигер.</div>
                <div class="about__card flex-center text-center">Мы занимаемся разработкой и популяризацией активных маршрутов. <br> Наши Походы можно забронировать у наших партнеров в Москве и Санкт-Петербурге.</div>
                <div class="about__card flex-center text-center">В городе Осташков мы приглашаем детей и подростков в <br> "Туристический кружок".</div>
            </div>
        `;

        return sectionAbout;
    }
}