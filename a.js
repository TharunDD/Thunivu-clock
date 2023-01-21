let time=document.getElementById("time");
function myclock(){
    let curtime=new Date();
    let hours = curtime.getHours();
    let mins=curtime.getMinutes();
    let sec=curtime.getSeconds();
    let dylit =hours<12?"AM":"PM";
    //hours>12?document.body.style.backgroundImage=URL("https://tse4.mm.bing.net/th?id=OIP.T9_1QlmH16cwLUnf4tPyfQHaE8&pid=Api&P=0"):document.body.style.backgroundImage=URL("https://tse1.mm.bing.net/th?id=OIP.cqTQLMC-AkW5xguXZfM3XAHaFj&pid=Api&P=0");
    hours=hours>12?hours-12:hours;
    hours=hours<10?"0"+hours:hours;
    mins=mins<10?"0"+mins:mins;
    sec=sec<10?"0"+sec:sec
    console.log(hours,mins,sec);
    time.innerHTML=`${hours}:${mins}:${sec}:${dylit}`
}
setInterval(myclock,1000)