let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let per = document.getElementById("period");

let dayname = document.getElementById("dayname");
let daynum = document.getElementById("daynum");
let month = document.getElementById("month");
let year = document.getElementById("year");

function updateClock() {

  let now = new Date();

  // TIME
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let period = "AM";

  if (hour == 0) hour = 12;

  if (hour > 12) {
    hour -= 12;
    period = "PM";
  }

  hrs.innerHTML = hour < 10 ? "0" + hour : hour;
  min.innerHTML = minute < 10 ? "0" + minute : minute;
  sec.innerHTML = second < 10 ? "0" + second : second;
  per.innerHTML = period;

  // DATE
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  dayname.innerHTML = days[now.getDay()];
  daynum.innerHTML = now.getDate();
  month.innerHTML = months[now.getMonth()];
  year.innerHTML = now.getFullYear();
}

updateClock();
setInterval(updateClock, 1000);
