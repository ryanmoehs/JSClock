const content = document.querySelectorAll('.container')

function updateClock(){
    // init
    let now = new Date();

    // greetings
    let greetings = document.getElementById('greetings')

    // date
    let dname = now.toLocaleString("default", {weekday: "long"})
    let mon = now.toLocaleString("default", {month: "short"})
    let dnum = now.getDate();
    let year = now.getFullYear();

    // clock
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let pe = document.getElementById('pe')
    
    // period
    if (hrs >= 12){
        pe.innerHTML = "PM";
    }else{
        pe.innerHTML = "AM"
    }
    
    // simplify hours num and change color
    if (hrs>=6 && hrs<12){
        document.body.style.backgroundColor="rgb(0, 134, 184)";
        greetings.innerHTML = "Good Morning!<br/>Have a great day!"
    } else if(hrs>=12 && hrs<18){
        hrs -= 12;
        document.body.style.backgroundColor="rgb(204, 204, 0)";
        content.forEach(container => {
            container.style.color = 'rgb(0,0,0)';
        })
        greetings.innerHTML = "Good Afternoon!<br/>Your day isn't over yet. Keep spirit!"
    } else if(hrs>=18 && hrs<6){
        hrs -= 12;
        document.body.style.backgroundColor="rgb(0, 0, 0)";
        greetings.innerHTML = "Good Evening!<br/>Don't forget to sleep buddy"
    }

    // add 0 to the numbers smaller than 9
    hrs = hrs <= 9 ? '0' + hrs : hrs
    min = min <= 9 ? '0' + min : min
    sec = sec <= 9 ? '0' + sec : sec
    
    // take from id
    document.getElementById('dname').innerHTML = dname;
    document.getElementById('dnum').innerHTML = dnum;
    document.getElementById('mon').innerHTML = mon;
    document.getElementById('year').innerHTML = year;
    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}

setInterval(updateClock, 1)