const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minE1=document.getElementById('min');
const secondsE1=document.getElementById('seconds');



const newyears= "1 jan 2024";

function countdown() {
    const newyearsDate = new Date(newyears);
    const currentDate = new Date();
     const totalsec=(newyearsDate-currentDate)/1000;
     const days =Math.floor(totalsec/3600/24);
     const hours=Math.floor(totalsec/3600)%24;
     const minutes=Math.floor(totalsec/60)%60;
     const seconds=Math.floor(totalsec)%60;
    

     daysE1.innerHTML=days;
     hoursE1.innerHTML=formattime(hours);
     minE1.innerHTML=formattime(minutes);
     secondsE1.innerHTML=formattime(seconds);

}

function formattime(time){
    return time<10?`0${time}`: time;
}
countdown();

setInterval(countdown,1000);