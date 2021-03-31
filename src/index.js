import './assets/scss/main.scss';
import 'jquery';
import './libs/fotorama/fotorama';
import carusel from './js/carusel';
import menu from './js/menu';
import select from './js/select';
import formSectonModalWindow from './js/formSectonModalWindow';
import reviewsCarusel from './js/reviewsCarusel';




document.addEventListener('DOMContentLoaded', () => {
    menu();
    carusel();
    select();
    formSectonModalWindow();
    reviewsCarusel();
});