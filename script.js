

let Hour = document.querySelector('#hours')
let Minute = document.querySelector('#minutes')
let Seconds = document.querySelector('#seconds')
let SetButton = document.querySelector('#set-button')


let second = 0
let minute = 0
let hour = 0

SetButton.addEventListener('click',()=>{
    setInterval(() =>{
        second++
        seconds.innerText = `0${second}`


        if (second >= 60) {
            minute++
            minutes.innerText = `0${minute}`
            second = 0
            
        }

        if (minute >= 2) {
            hour++
            hours.innerText = `0${hour}`
            minute = 0
            
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

    },1000)


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
