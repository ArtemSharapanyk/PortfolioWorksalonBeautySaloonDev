import './assets/scss/main.scss';
import 'jquery';
import './libs/fotorama/fotorama';
import carusel from './js/carusel';
import menu from './js/menu';
import select from './js/select';
import formSectonModalWindow from './js/formSectonModalWindow';
import reviewsCarusel from './js/reviewsCarusel';
import loader from './js/loader';
import scrollUpBtn from './js/scrollUpBtn';




document.addEventListener('DOMContentLoaded', () => {
   new Promise((res => {
        menu();
        carusel();
        select();
        formSectonModalWindow();
        reviewsCarusel();
        scrollUpBtn()

        res()
   })).then(() => {
        loader();
   })
    
});