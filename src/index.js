import cartTpl from './templates/menu-tpl.hbs';
import menu from './menu.json';

const menuZone = document.querySelector('.js-menu');
const body = document.querySelector('body');
const checkbox= document.querySelector('#theme-switch-toggle')

const createMenu = menu.map(cartTpl).join('');

menuZone.insertAdjacentHTML('beforeend', createMenu);

const checkboxPick = () => {
  checkbox.checked
  ? (body.classList.add('dark-theme'), 
    body.classList.remove('light-theme'), 
    localStorage.setItem('theme', 'dark'))

  : (body.classList.add('light-theme'), 
    body.classList.remove('dark-theme'), 
    localStorage.setItem('theme', 'light'))
}

const thema = localStorage.getItem('theme');
thema === 'dark'
? (body.classList.add('dark-theme'), 
  body.classList.remove('light-theme'),
  checkbox.checked = true)
  
: (body.classList.add('light-theme'), 
  body.classList.remove('dark-theme'),
  checkbox.checked = false)
 

checkbox.addEventListener('change', checkboxPick);