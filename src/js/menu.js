
export default () => {
    const menuBtn  = document.querySelector('.hamburger');
    const header   = document.querySelector('header');
    const darkBg   = document.querySelector('.darkBg');
    const body     = document.querySelector('body');

    menuBtn.addEventListener('click', () => {
        setTimeout(() => {
            menuBtn.classList.toggle('is-active');
        }, 200);
        
        darkBg.classList.toggle('activeMenu');
        header.classList.toggle('activeMenu');
        body.classList.toggle('activeMenu');
    });
}