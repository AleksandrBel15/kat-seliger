import '../styles/main.scss';
import Hero from '../components/Hero/Hero.js';
const hero = new Hero();

const app = document.getElementById('app');
app.appendChild(hero.element);

