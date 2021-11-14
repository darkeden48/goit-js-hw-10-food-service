
import './sass/main.scss';
import menuCards from './templates/menu-tpl.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitcherCheckboxRef = document.querySelector('.theme-switch__toggle');
const menuCardsRef = document.querySelector('.menu');
menuCardsRef.insertAdjacentHTML('beforeend', menuCards(menu));

if (localStorage.getItem('theme') === 'dark') {
  bodyRef.classList.toggle(`${Theme.DARK}`);
  themeSwitcherCheckboxRef.checked = true;
}

themeSwitcherCheckboxRef.addEventListener('change', () => {
  bodyRef.classList.toggle(`${Theme.DARK}`);
  themeSwitcherCheckboxRef.checked
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
});