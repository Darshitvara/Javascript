
// setTImeinterval(tickclock,1000);
setInterval(tickclock,1000);



function tickclock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = formateZeros(hour);
    minute = formateZeros(minute);
    second = formateZeros(second);

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;
}


function formateZeros(time){
    
    return time <10 ? "0" + time :time;
}
















