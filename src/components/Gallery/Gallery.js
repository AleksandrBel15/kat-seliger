import './Gallery.scss';

export default class Gallery {
    #num = 1;
    #maxCount = 25;
    #imgEl = null;

    constructor() {
        this.element = this.#render();
        this.#imgEl = this.element.querySelector('#gallery__image');
        this.#setupEvents();
    };

    #render() {
        const sectionGallery = document.createElement('section');
        sectionGallery.className = 'gallery';
        sectionGallery.innerHTML = `
            <h2>А это мы!</h2>
            <div class="imageWrapper">
                <button class="gallery__button left-button" id="left-button" aria-label="Изображение назад">
                    <svg width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </button>
                <div class="gallery__photo flex-center">
                    <img id="gallery__image" src="./../../assets/galleryImages/photo1.webp" alt="Описание" loading="lazy">
                </div>
                <button class="gallery__button right-button" id="right-button" aria-label="Изображение вперёд">
                    <svg width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </button>
            </div>
        `;

        return sectionGallery;
    };

    #updateImage() {
        this.#imgEl.src = `./../../assets/galleryImages/photo${this.#num}.webp`;
        this.#imgEl.alt = `Изображение ${this.#num}`;
    }

    #handleNextClick() {
        this.#num++;

        if (this.#num > this.#maxCount) this.#num = 1;

        this.#updateImage();
    }

    #handlePrevClick() {
        this.#num--;

        if (this.#num < 1) this.#num = this.#maxCount;

        this.#updateImage();
    }

    #setupEvents() {
        const leftBtn = this.element.querySelector('#left-button');
        const rightBtn = this.element.querySelector('#right-button');
        leftBtn.addEventListener('click', this.#handlePrevClick.bind(this));
        rightBtn.addEventListener('click', this.#handleNextClick.bind(this));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.#handlePrevClick();
            if (e.key === 'ArrowRight') this.#handleNextClick();
        });
    }
}