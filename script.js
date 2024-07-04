function getDay() {
  const day = new Date().getDate();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[day];
  console.log(currentDay);
  return currentDay;
}
function getUTCTime() {
  const time = new Date().toUTCString().split(" ")[4];
  const gmt = new Date().toUTCString().split(" ")[5];
  return time + " " + gmt;
}
getDay();
const utc_time = document.getElementById("currentTimeUTC");
const day = document.getElementById("currentDay");
day.innerHTML = getDay();
setInterval(() => {
  utc_time.innerHTML = getUTCTime();
}, 1000);
