import './Reviews.scss';

export default class Reviews {
    constructor() {
        this.element = this.#render();
    }

    #render() {
        const sectionReviews = document.createElement('section');
        sectionReviews.className = 'reviews';
        sectionReviews.innerHTML = `
            <h2 class="ubuntu-medium" aria-label="Отзывы">Отзывы</h2>
            <div class="review_cards">
                <div class="review">
                    <h3>Роман</h3>
                    <p>Прекрасный вело-поход по "Жемчужине Селигера" в 2012 во главе с Андреем оставил на долгие года хорошие воспоминания. Теперь так и бродим по этой местности, то на лыжах, то на байдарках, то пешком. Душой прикипели! Осторожно, туризм затягивает ;)</p>
                </div>
                <div class="review">
                    <h3>Надежда</h3>
                    <p>Спасибо Андрею и Алексею - нашим инструкторам за незабываемый лыжный поход на праздничные выходные 6-8 марта! Удивительные места зимнего Селигера, песни под гитару, баня и душевная атмосфера - все это на высшем уровне!! От всей души благодарю!</p>
                </div>
            </div>
        `;

        return sectionReviews;
    }
}