export default () => {
    const loader = document.querySelector('.loader');

        loader.classList.add('pageAreLoad');
        document.body.classList.remove('hideScroll');
            
        setTimeout(() => {
            loader.classList.add('hidePage');
        }, 1000)

};