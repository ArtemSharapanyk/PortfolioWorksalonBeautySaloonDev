import './assets/scss/main.scss';
import 'jquery';
import './libs/fotorama/fotorama';
import menu from './js/menu';
import select from './js/select';
import formSectonModalWindow from './js/formSectonModalWindow';
import loader from './js/loader';
import scrollUpBtn from './js/scrollUpBtn';
import slider from './js/slider';




document.addEventListener('DOMContentLoaded', () => {
   new Promise((res => {
        menu();
        select();
        formSectonModalWindow();
        scrollUpBtn();
        slider('base', '.sServices .sliderBtnLeft', '.sServices .sliderBtnRight', '.sServices .slide', 3,{
           
               '850': {
                    slidesInPage: 2,
                    operator: '<='
               },
               '650': {
                    slidesInPage: 1,
                    operator: '<='
               } 
          
        }, '.slider.sServices');

        slider('onlyDot', '', '', '.reviewSlider .review', 1, false,'.reviewSlider','.reviewSlider .dots .dot', 90)

        res()
   })).then(() => {
        loader();
   })
    
});