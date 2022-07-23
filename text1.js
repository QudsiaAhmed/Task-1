setInterval(setClock, 1000);

const hour_clock = document.querySelector('.hour');
const min_clock = document.querySelector('.min');
const sec_clock = document.querySelector('.sec');

function setClock() {
    const currentdate = new Date();
    const sec = currentdate.getSeconds() / 60;
    const min = (sec + currentdate.getMinutes()) / 60;
    const hour = (min + currentdate.getHours()) / 12;

    setRotation(hour_clock, hour);
    setRotation(min_clock, min);
    setRotation(sec_clock, sec);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotate', rotationRatio * 360);
}













function Clock() {

    var date = new Date();

    var hour = date.getHours();

    var minute = date.getMinutes();

    var seconds = date.getSeconds();

    var day = date.getDay();

    var today = date.getDate();

    var month = date.getMonth();



    if (day == 0) {

        document.getElementById("day").innerHTML = "sunday"

    } else if (day == 1) {

        document.getElementById("day").innerHTML = "monday"

    } else if (day == 2) {

        document.getElementById("day").innerHTML = "tuesday"

    } else if (day == 3) {

        document.getElementById("day").innerHTML = "wednesday"

    } else if (day == 4) {

        document.getElementById("day").innerHTML = "thursday"

    } else if (day == 5) {

        document.getElementById("day").innerHTML = "friday"

    } else if (day == 6) {

        document.getElementById("day").innerHTML = "saturday"

    }



    if (month == 0) {

        document.getElementById("date").innerHTML =

            "january" + "  " + today;

    } else if (month == 1) {

        document.getElementById("date").innerHTML =

            "february" + "  " + today;

    } else if (month == 2) {

        document.getElementById("date").innerHTML =

            "march" + "  " + today;

    } else if (month == 3) {

        document.getElementById("date").innerHTML =

            "april" + "  " + today;

    } else if (month == 4) {

        document.getElementById("date").innerHTML =

            "may" + "  " + today;

    } else if (month == 5) {

        document.getElementById("date").innerHTML =

            "june" + "  " + today;

    } else if (month == 6) {

        document.getElementById("date").innerHTML =

            "july" + "  " + today;

    } else if (month == 7) {

        document.getElementById("date").innerHTML =

            "august" + "  " + today;

    } else if (month == 8) {

        document.getElementById("date").innerHTML =

            "september" + "  " + today;

    } else if (month == 9) {

        document.getElementById("date").innerHTML =

            "october" + "  " + today;

    } else if (month == 10) {

        document.getElementById("date").innerHTML =

            "november" + "  " + today;

    } else if (month == 11) {

        document.getElementById("date").innerHTML =

            "december" + "  " + today;

    }



    if (hour > 12) {

        hour = hour - 12;

    }

    if (hour < 10) {

        hour = "0" + hour;

    }

    if (minute < 10) {

        minute = "0" + minute;

    }

    if (seconds < 10) {

        seconds = "0" + seconds;

    }



    document.getElementById("hour").innerHTML = hour;

    document.getElementById("minute").innerHTML = minute;

    document.getElementById("seconds").innerHTML = seconds;



}
setInterval(Clock, 1000)