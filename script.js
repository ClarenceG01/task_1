let currentTime=document.getElementById('currentTimeUTC');
function getUTCTime() {
  const time = new Date().toUTCString().split(" ")[4];
  const gmt = new Date().toUTCString().split(" ")[5];
  console.log(time + ' '+gmt)
  return time + " " + gmt;
}
currentTime.innerHTML=getUTCTime();

