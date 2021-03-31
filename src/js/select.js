export default () => {
    const select          = document.querySelector('select');
    const selectOptions   = document.querySelectorAll('option');
    const costomiseSelect = document.querySelector('.select');
    const optionBar       = document.querySelector('.optionBar');
    const mySelect        = document.querySelector('.select input');
    let newOptions        = ``;

    const closeOpenOptionBar  = () => {
        optionBar.classList.toggle('openBarActive');
    };

    const changeMySelectPlaceholder = text => {
        mySelect.value = text.trim()
    };

    const setValueToOriginSelect = index => {
        select.selectedIndex = index - 1;
        
        Object.keys(selectOptions).forEach(item => {
            const option = selectOptions[item];

            if(option.value === index ){
                changeMySelectPlaceholder(option.innerHTML);
            }
        });
    };

    const initOptions  = () => {
        new Promise(res => {
            Object.keys(selectOptions).forEach(item => {
                const option = selectOptions[item];

                newOptions += ` <div class="myOption" data-value='${option.value}'>${option.innerHTML}</div> `
            });

            res();
        }).then(() => {
            optionBar.innerHTML = newOptions;
        }).then(() => {
            const myOption = document.querySelectorAll('.myOption');

            Object.keys(myOption).forEach(item => {
                const option = myOption[item];

                const optionValueIndex = option.dataset.value;



                option.addEventListener('click', () => {
                    setValueToOriginSelect(optionValueIndex);
                    closeOpenOptionBar();
                });
            })
        }).then(() => {
            let firtsOption = selectOptions[0];

            changeMySelectPlaceholder(firtsOption.innerHTML)
            select.selectedIndex = firtsOption.innerHTML; 
        });
    };
       
    


    initOptions();
    

    
    costomiseSelect.addEventListener('click', closeOpenOptionBar);
};