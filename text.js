setInterval(() => {

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM"

    // convert 24 hours clock to 12 hrs clock
    if (h > 12) {
        h = h - 12;
    }
    //add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am


    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 12 hrs clocks
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    //60 minutes
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    //60 seconds
    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    //360/12=30
    hr_min.style.transform = `rotate(${m * 6}deg)`;
    //360/12=30
    hr_sec.style.transform = `rotate(${s * 6}deg)`;
    //360/12=30
})

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})





var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById("p1").innerHTML = date;





const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("demo").innerHTML = day;