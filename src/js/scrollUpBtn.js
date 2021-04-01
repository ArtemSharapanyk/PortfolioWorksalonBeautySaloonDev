export default () => {
    const btn                 = document.querySelector('.scrollUpBtn');
    const whereBtnWillBeShow  = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 2;
    
    window.addEventListener('scroll', () => {
        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if(scrollPosition > whereBtnWillBeShow){
            if(btn.classList.contains('active')){
                return;
            }else{
                btn.classList.add('active')
            }
        }else{
            btn.classList.remove('active');
        }
    });

    btn.addEventListener('click', () => {
        scroll({
            top: 0,
            behavior: "smooth"
          });
    })
};