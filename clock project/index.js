function updateClock(){
    let now = new Date();
    let dname = now.getDay();
    let mo = now.getMonth();
    let dnum = now.getDate();
    let yr = now.getFullYear();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let pe = "AM";

    if(hr == 0){
        hr = 12;
    }
    if(hr > 12){
        hr = hr-12;
        pe = 'PM';
    }

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let ids = ['dayname', 'month', 'daynum', 'year', 'hour', 'minute', 'second', 'period'];
    let values = [week[dname], months[mo],String(dnum).padStart(2, '0'), yr, String(hr).padStart(2, '0'), String(min).padStart(2, '0'), String(sec).padStart(2, '0'), pe];

    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).textContent = values[i];
    }
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}