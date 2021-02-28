const anaSecond=document.querySelector("[data-second-hand]");
const anaMinuite=document.querySelector("[data-minute-hand]");
const anaHour=document.querySelector("[data-hour-hand]");

function setClocl(){
 const currentDate=new Date();
 
 const theSecond=currentDate.getSeconds();
 const theMinuite=currentDate.getMinutes();
 const theHours=currentDate.getHours();

 const secondRatio=theSecond/60;
 const minuiteRatio=(secondRatio+theHours)/60;
 const hourRatio=(minuiteRatio+theHours)/12;

 setRatio(anaSecond,secondRatio);
 setRatio(anaMinuite,minuiteRatio);
 setRatio(anaHour,hourRatio);
}

function setRatio(elem, rotationRatio) {
 elem.style.setProperty("--rotation", rotationRatio*360);
}

setInterval(setClocl, 1000);
setClocl();