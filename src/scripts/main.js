import '../styles/main.scss';
import Hero from '../components/Hero/Hero.js';
const hero = new Hero();
import About from '../components/AboutUs/About.js';
const about = new About();

const app = document.getElementById('app');
app.appendChild(hero.element);
app.appendChild(about.element);
