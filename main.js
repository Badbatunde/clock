const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const today = document.querySelector('.today');

function setDate() {
    const now = new Date();
    today.innerHTML = now;

    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();