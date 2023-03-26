const time = document.getElementById("time");
const date = document.getElementById("date");
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getDate(){
    const temp = new Date();
    const years = temp.getFullYear();
    const months = String(temp.getMonth() + 1).padStart(2,"0");
    const dates = String(temp.getDate()).padStart(2,"0");
    const days = week[temp.getDay()];
    date.innerText = `${years}.${months}.${dates}.${days}`;
}

function getTime(){
    const temp = new Date();
    const hours = String(temp.getHours()).padStart(2,"0");
    const minutes = String(temp.getMinutes()).padStart(2,"0");
    const seconds = String(temp.getSeconds()).padStart(2,"0");
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

//setTimeout(sayHello, 5000);
getDate();
getTime();
setInterval(getTime, 1000);