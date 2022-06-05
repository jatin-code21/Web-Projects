const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

const newYear = "6 July 2022"

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    // console.log(newYearDate - currentDate);
    // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatText(hours);
    minsEl.innerHTML = formatText(mins);
    secondsEl.innerHTML = formatText(seconds);
}

function formatText(content) {
    return content < 10 ? `0${content}` : content;
}

countdown();

setInterval(countdown, 1000)