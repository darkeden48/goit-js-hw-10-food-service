

import menuCardTpl from './templates/menu-tpl.hbs';
import menu from './menu.json';

const menuContainers=document.querySelector('.js-menu');
const cardsMarkup=createMenuCardMarkup(menu);
const changeTheme=document.querySelector('#theme-switch-toggle');
const bodySite=document.querySelector('body')

menuContainers.insertAdjacentHTML("beforeend",cardsMarkup);

changeTheme.addEventListener('change',themeChangeClick);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

function createMenuCardMarkup(menu){
    return menu.map(menuCardTpl).join('');
}

if (localStorage.getItem('theme') === 'dark') {
    bodySite.classList.toggle(`${Theme.DARK}`);
    changeTheme.checked = true;
  }

function themeChangeClick(event){
    bodySite.classList.toggle(`${Theme.DARK}`);
    changeTheme.checked
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
}
    // if(event.currentTarget.checked){
    // bodySite.classList.add('dark-theme');
    // bodySite.classList.remove('light-theme');
    // }
    // else{
    //     bodySite.classList.add('light-theme');
    //     bodySite.classList.remove('dark-theme');
    // }