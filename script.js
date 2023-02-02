let miliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let timer // Makes the setInterval variable global, to use in every function.

const startBtn = document.getElementById("start-btn")
const resetBtn = document.getElementById("reset-btn")
const pauseBtn = document.getElementById("pause-btn")

let time = document.getElementById("time") // Maybe I'll change this later to not confuse "let time" and "let timer".

startBtn.addEventListener("click", startTimer)
resetBtn.addEventListener("click", resetTimer)
pauseBtn.addEventListener("click", pauseTimer)

// Starts the timer.
function startTimer(){
    pauseTimer() // Not a optimal way to fix the clicking glitch, I'll fix this soon.
    timer = setInterval(formatTimer, 10)
}

// Function to format the timer correctly.
function formatTimer(){
    miliseconds++
    if(miliseconds > 100){ // Every 100 miliseconds counts a second up and resets its value.
        miliseconds = 0
        seconds++
    }
    if(seconds > 60){ // Every 60 seconds counts a minute up and resets its value.
        seconds = 0
        minutes++
    }

    if(minutes > 60){ // Every 60 minutes counts an hour up and resets its value.
        minutes = 0
        hours++
    }

    time.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.<span id="ms">${miliseconds < 100 ? 0 + miliseconds : miliseconds}</span>`
    // If the value is smaller than 10, then it concatenates a zero at the start of it's value.
    // Used to prevent the timer from being 0:0:0 and glitched out.
}

// Resets the timer.
function resetTimer(){
    hours = minutes = seconds = 0
    clearInterval(timer)
    time.innerHTML = '00:00:00<span id="ms">.00</span>'
}

// Pauses the timer.
function pauseTimer(){
    clearInterval(timer)
}