import './assets/scss/main.scss';
import 'jquery';
import './libs/fotorama/fotorama';
import carusel from './js/carusel';
import menu from './js/menu';
import select from './js/select';


document.addEventListener('DOMContentLoaded', () => {
    menu();
    carusel();
    select();
});