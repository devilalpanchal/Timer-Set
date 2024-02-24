

let Hour = document.querySelector('#hours')
let Minute = document.querySelector('#minutes')
let Seconds = document.querySelector('#seconds')
let SetButton = document.querySelector('#set-button')
let EndButton = document.querySelector('#end-button')
let ResetButton = document.querySelector('#reset-button')
let StartButton = document.querySelector('#Start-button')
let MaintainButton = document.querySelector('.Maintain-botton')

let second = 60
let minute
let hour
const inpt = () => {
    hour = prompt("enter houre")
    minute = prompt("enter minute")
    // second=prompt("enter seconds")
}
let timerId
StartButton.addEventListener('click', () => {
    inpt();
    timerId = setInterval(() => {
        second--
        // seconds.innerText = `0${second}`
        if (second == 0) {
            if (minute > 0) {
                minute--
                second = 60
            }
            // second=60
            // minutes.innerText = `0${minute}`
        }
        if (minute == 0) {
            if (hour > 0) {
                hour--
                hours.innerText = `0${hour}`

                minute = 60
            }
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
        if (hour == 0 && minute == 0 && second == 0) {
            alert("time up");
            clearInterval(timerId);
        }
    }, 1000)
})
EndButton.addEventListener('click', () => {
    clearInterval(timerId)
})
ResetButton.addEventListener('click', () => {
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
SetButton.addEventListener('click', () => {
    MaintainButton.classList.remove('hide');
    SetButton.style.background = "white";
    SetButton.style.color = "black";
    SetButton.style.fontSize = "15px";
    SetButton.style.border = "1px solid white"
})



