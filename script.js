const countdown = document.getElementById('countdown');

function updateCountdown() {
  const targetDate = new Date("2023-12-31T23:59:59Z");
  const currentDate = new Date();
  
  let diff = targetDate.getTime() - currentDate.getTime();

  let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4));
  diff -= months * (1000 * 60 * 60 * 24 * 30.4);

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  let hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  let minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  let seconds = Math.floor(diff / 1000);

  countdown.querySelector('.months').innerHTML = months;
  countdown.querySelector('.days').innerHTML = days;
  countdown.querySelector('.hours').innerHTML = hours;
  countdown.querySelector('.minutes').innerHTML = minutes;
  countdown.querySelector('.seconds').innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
