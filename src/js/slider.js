export default (type = 'base', btnLeftClass, btnRightClass, sliderItemsClass, countOfVisibleSlides, rules, sliderClass, dotsArray, handSetMargin) => {
    let showsSlides = countOfVisibleSlides;
    let numberOfMarginStatic =  handSetMargin || 100 / showsSlides ;
    let countMarginAll       = 0;
    let activeSlidePageIndex = 0;
    let slider = document.querySelector(sliderClass);
    const sliderItems = document.querySelectorAll(sliderItemsClass);

    const dots = document.querySelectorAll(dotsArray);
    

    let addRules = () => {
        if(!rules){
            return
        }

        Object.keys(rules).reverse().forEach((item) => {
            let {slidesInPage, operator} = rules[item];

           
            if(operator === '<='){
                if(screen.width <= +item){
                    showsSlides = slidesInPage;
                    numberOfMarginStatic = 100 / slidesInPage;
                }
            }

        })
    };


    let checkRange = (func, isLeft = false) => {      
        if(isLeft){
            if(type === 'onlyDot'){
                dots.forEach(item => {
                    item.classList.remove('active');
                }); 
            }

            if(activeSlidePageIndex == 0){
                countMarginAll = -(sliderItems.length - showsSlides) * numberOfMarginStatic;
                activeSlidePageIndex = sliderItems.length - showsSlides;
                
                if(type === 'onlyDot'){
                    dots[activeSlidePageIndex].classList.add('active');
                }
                
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(${countMarginAll}vw)`;
                });
    
                return;
            }
        }
        else{
            if(showsSlides + activeSlidePageIndex === sliderItems.length){
                countMarginAll = 0;
                activeSlidePageIndex = 0;

                if(type === 'onlyDot'){
                    dots[activeSlidePageIndex].classList.add('active');
                }
    
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(${0})`;
                });
    
                return;
            }
        }

        func();
    }

    let moveSlideRight = () => {    
            if(type === 'onlyDot'){
                dots.forEach(item => {
                    item.classList.remove('active');
                }); 
            }   

            

            checkRange(() => {
                activeSlidePageIndex++;
                countMarginAll -= numberOfMarginStatic;
                

                if(type === 'onlyDot'){
                    dots[activeSlidePageIndex].classList.add('active');
                }   

                sliderItems.forEach(item => {
                    item.style.transform = `translateX(${countMarginAll + 'vw'})`;
                });
            });
    };

    let moveSlideLeft = () => {
        
       checkRange(() => {
            activeSlidePageIndex--;
            countMarginAll += numberOfMarginStatic;
            

            if(type === 'onlyDot'){
                dots[activeSlidePageIndex].classList.add('active');
            }   

            sliderItems.forEach(item => {
                item.style.transform = `translateX(${countMarginAll + 'vw'})`;
            });
       }, true);
    };


    //mobile optimization 
    let firstClick = null;
    let distance   = null;
    let move       = false;

    const isMobileChecker = callback => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            callback()
        }
    };

    const getFirstClick = ({pageX, pageY}) => {

        isMobileChecker(() => {
            firstClick = {
                pageX, pageY
            };
        })
         
    };

    const getMoveDistance = ({pageX, pageY}) => {
        isMobileChecker(() => {
            if(pageY === firstClick.pageY){
                distance = pageX;
                move = true
            }else{
                return
            }
        });
    };

    
    const swipe = () => {
    
        isMobileChecker(() => {
            if(move){
                if(distance > firstClick.pageX ){
                    moveSlideLeft();
                }
                else if(distance < firstClick.pageX){
                    moveSlideRight()
                }else{
                    return;
                }

                move = false;
            }
        });

    }

    addRules();

    if(type === 'base'){
        
        const btnLeft               = document.querySelector(btnLeftClass);
        const btnRight              = document.querySelector(btnRightClass);

    
        btnRight.addEventListener('click', moveSlideRight);
        btnLeft.addEventListener('click', moveSlideLeft);
    }

    if(type === 'onlyDot'){
        dots[activeSlidePageIndex].classList.add('active');

        dots.forEach((item, index) => {
            item.addEventListener('click', () => {
                dots.forEach(item => {
                    item.classList.remove('active');
                });

                activeSlidePageIndex = index;
        
                dots[activeSlidePageIndex].classList.add('active');
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(-${numberOfMarginStatic * activeSlidePageIndex}vw)`;
                });
            });
        })
    }

    sliderItems.forEach(item => {
        item.addEventListener('pointerdown', getFirstClick);
        item.addEventListener('pointermove', getMoveDistance);
        item.addEventListener('pointerleave', swipe);
    })
}