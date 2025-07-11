import '../styles/main.scss';
import Hero from '../components/Hero/Hero.js';
const hero = new Hero();
import About from '../components/AboutUs/About.js';
const about = new About();
import Gallery from '../components/Gallery/Gallery.js';
const gallery = new Gallery();
import Reviews from '../components/Reviews/Reviews.js';
const reviews = new Reviews();

const app = document.getElementById('app');
app.appendChild(hero.element);
app.appendChild(about.element);
app.appendChild(gallery.element);
app.appendChild(reviews.element);
