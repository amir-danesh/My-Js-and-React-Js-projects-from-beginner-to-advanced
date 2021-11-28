const newYears = '1 Jan 2022'

const daysId = document.getElementById("days");
const hoursId = document.getElementById("hours");
const minutesId = document.getElementById("minutes");
const secondsId = document.getElementById("seconds");

function countdown(){
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);

    const secondsUntilFinal = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(secondsUntilFinal / 3600 / 24);
    const hours = Math.floor(secondsUntilFinal / 3600 - days * 24);
    const minutes = Math.floor(secondsUntilFinal / 60 - (days * 24 * 60 + hours * 60));
    const seconds = Math.floor(secondsUntilFinal - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60));

    daysId.innerHTML = days;
    hoursId.innerHTML = formatTime(hours);
    minutesId.innerHTML = formatTime(minutes);
    secondsId.innerHTML = formatTime(seconds);

    console.log(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

setInterval(countdown, 1000);