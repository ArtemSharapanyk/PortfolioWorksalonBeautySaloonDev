export default () => {
    const modalWindow = document.querySelector('.formSection .modalWindow');
    const form        = document.querySelector('form');
    const infoBlock   = document.querySelector('.formSection .info');
    const btn         = document.querySelector('form .btn');

    btn.addEventListener('click', e => {
        e.preventDefault();


        form.classList.add('active');
        infoBlock.classList.add('active');
        modalWindow.classList.add('active');
    });
};