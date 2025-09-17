//console.log(new Date().getMinutes())
let min;
let minAngle;
let minHour;
let hour;
let hourAngle;
let longHand=document.querySelector('.l-hand');
let shortHand=document.querySelector('.s-hand')
let minAnimation;
let hourAnimation;
function minutesTime(){
    min=new Date().getMinutes()-15;
    minAngle=min*6;
    longHand.style.transform=`rotateZ(${minAngle}deg)`;
    minAnimation= requestAnimationFrame(minutesTime)
}
minAnimation= requestAnimationFrame(minutesTime)
function hourTime(){
    hour=new Date().getHours()-3;
    min=new Date().getMinutes()-15;
    minHour=min/60;
    hourAngle=(hour+minHour)*30;
    shortHand.style.transform=`rotateZ(${hourAngle}deg)`
    hourAnimation=requestAnimationFrame(hourTime)
}
hourAnimation=requestAnimationFrame(hourTime)