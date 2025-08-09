let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let duration = document.querySelector("#Duration");

setInterval(() => {
  let data = new Date();

  let hours = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();

  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12; // midnight case
  }

  // Add leading zero if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //am or pm
  let period = data.getHours() >= 12 ? duration.textContent = "PM" : duration.textContent ="AM";

  // Display
  hrs.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
}, 1000);