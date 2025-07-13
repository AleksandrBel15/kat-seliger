import './Communication.scss';

export default class Communication {
    constructor() {
        this.element = this.#render();
    }

    #render() {
        const sectionComm = document.createElement('section');
        sectionComm.className = 'comm';
        sectionComm.innerHTML = `
            <div class="containerComm text-center flex-center">
                <h2>Оставить заявку</h2>
                <p>Позвоните нам по номеру или напишите: <br> +7 (993) 550-69-33 <br> kat-seliger@ya.ru</p>
            </div>
        `;  

        return sectionComm;
    }
}