const shablon = document.querySelector('.shablon')
const numbers = document.querySelectorAll('.numbers span')
const send_btn = document.querySelector('.send-btn')
const num = document.querySelector('.numbers')
const selected = document.querySelector('.selected')
const closeBtn = document.querySelector('.fa-xmark')
const resetShablon = document.querySelector(".result")

send_btn.classList.add('active')
numbers.forEach(event => {
    event.addEventListener('click', () => {
    send_btn.classList.remove('active')
        for (const item of numbers) {
            if (item.classList.contains('active')) item.classList.remove('active');
        }
        event.classList.add('active')
        // num.classList.add('active')
        selected.textContent=event.textContent
    })
    closeBtn.addEventListener('click', function () {
         event.classList.remove('active')
        resetShablon.classList.add('top')
        resetShablon.classList.remove('active')
        if (resetShablon.classList.contains('top')) {
        setTimeout(() => {
            resetShablon.classList.add('bottom')
            if (resetShablon.classList.contains('bottom')) {
                resetShablon.classList.remove('top')
                shablon.classList.remove('bottom')
                shablon.classList.add('condition')
                shablon.classList.remove('active')
            }
            
        }, 1200);
    }
})


});
send_btn.addEventListener('click', function () {
    shablon.classList.add('active')  
    shablon.classList.remove('condition')
    if (shablon.classList.contains('active')) {
        setTimeout(() => {
            resetShablon.classList.add('active')
            resetShablon.classList.remove('bottom')
            shablon.classList.add('bottom')
            
            }, 2000);
        }
        
    })



// numbers.forEach(event => {
    
//     // resetShablon.classList.add('act')
//     event.addEventListener('click', function (e) {
//         event.classList.add('active')
//         num.classList.add('active')
//         selected.textContent=event.textContent
        
//     })
//     closeBtn.addEventListener('click', function () {
//         event.classList.remove('active')
//         num.classList.remove('active')
        
//     })
    
//     send_btn.addEventListener('click', function () {
//         shablon.classList.add('active')
//     })


    
// });
