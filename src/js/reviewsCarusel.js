export default () => {
    const sliderItems           = document.querySelectorAll('.reviewSlider .review');
    const dots                  = document.querySelectorAll('.reviewSlider .dots .dot')
    let activeSlidePageIndex  = 0;
    const numberOfMarginStatic  = 90;

    let initSlides = number => {
        dots.forEach(item => {
            item.classList.remove('active');
        });

        dots[number].classList.add('active');
        sliderItems.forEach(item => {
            item.style.transform = `translateX(-${numberOfMarginStatic * number}vw)`
        })
    };

    initSlides(activeSlidePageIndex);

    dots.forEach((item, index) => {
        item.addEventListener('click', () => {
            initSlides(activeSlidePageIndex = index)
        });
    });
}