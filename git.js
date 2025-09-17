//console.log(new Date().getMinutes())
let min;
let minAngle;
let hour;
let hourAngle;
let longHand=document.querySelector('.l-hand');
let minAnimation;
function minutesTime(){
    min=new Date().getMinutes()-15;
    minAngle=min*6;
    longHand.style.transform=`rotateZ(${minAngle}deg)`;
    console.log(`rotateZ(${minAngle}deg)`)
    minAnimation= requestAnimationFrame(minutesTime)
}
minAnimation= requestAnimationFrame(minutesTime)