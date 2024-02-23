

let Hour = document.querySelector('#hours')
let Minute = document.querySelector('#minutes')
let Seconds = document.querySelector('#seconds')
let SetButton = document.querySelector('#set-button')
let EndButton = document.querySelector('#end-button')
let ResetButton = document.querySelector('#reset-button')
let StartButton = document.querySelector('#Start-button')
let MaintainButton = document.querySelector('.Maintain-botton')

let second = 60
let minute = 60
let hour = 1
let timerId
StartButton.addEventListener('click', () => {
    timerId = setInterval(() => {
        second--
        seconds.innerText = `0${second}`

        if (second <= 60) {
            minute--
            minutes.innerText = `0${minute}`
    
        }

        if (minute <= 60) {
            hour--
            hours.innerText = `0${hour}`
        
        }
        


        if (second < 10) {
            seconds.innerText = `0${second}`
        } else {
            seconds.innerText = second
        }

        if (minute < 10) {
            minutes.innerText = `0${minute}`
        } else {
            minutes.innerText = minute
        }

        if (hour < 10) {
            hours.innerText = `0${hour}`
        } else {
            minutes.innerText = minute
        }

    }, 1000)


})


EndButton.addEventListener('click',()=>{
    
    clearInterval(timerId)
})


ResetButton.addEventListener('click',()=>{
    second = 0
 minute = 0
 hour = 0
 seconds.innerText = `00`
    minutes.innerText = `00`
    hours.innerText = `00`
    // ResetButton.style.background = "white";
    // ResetButton.style.color = "black";
    // ResetButton.style.fontSize = "15px";

    clearInterval(timerId)
})

SetButton.addEventListener('click',()=>{
    MaintainButton.classList.remove('hide');
    SetButton.style.background = "white";
    SetButton.style.color = "black";
    SetButton.style.fontSize = "15px";
    SetButton.style.border = "1px solid white";

})


// var interval;
// var minutes = 0;
// var seconds = 10;

// function countdown(element) {
//     interval = setInterval(function(timer) {
//         var el = document.getElementById(element);
//         if(seconds == 0) {
//             if(minutes == 0) {
//                 (el.innerHTML = "STOP!");

//                 clearInterval(interval);
//                 return;
//             } else {
//                 minutes--;
//                 seconds = 60;
//             }
//         }
//         if(minutes > 0) {
//             var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
//         } else {
//             var minute_text = '';
//         }
//         var second_text = seconds > 1 ? '' : '';
//         el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
//         seconds--;
//     }, 1000);
// }
// var start = document.getElementById('start');

// start.onclick = function(timer) {
// if (!interval) {
//     countdown('countdown');
// }
// }
