
setInterval(function(){
let dateNow = new Date();
let hours = dateNow.getHours();
if (hours > 12) {
    hours = hours - 12
}
if (hours < 10) {
    hours = `0${hours}`
}
let minutes = dateNow.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`
}
let seconds = dateNow.getSeconds();
if (seconds < 10) {
    seconds = `0${seconds}`
}
document.querySelector(".clock").innerHTML = `${hours} : ${minutes} : ${seconds}`
} ,1000)