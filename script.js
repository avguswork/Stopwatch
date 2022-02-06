//
const timeClock = document.querySelector('#timeClock');
const timer = document.querySelector('.timer');



let timeHour = 0;
let timeMin = 0;
let timeSec = 0;
let timeMinNull = 0;
let timeSecNull = 0;
let timeRun = 0;

let timeElement = `${timeHour}:${timeMinNull}${timeMin}:${timeSecNull}${timeSec}`

const timeSector = document.createElement('h2');
timeSector.innerText = timeElement;
timeClock.append(timeSector);
timeClock.classList.add('white');

//Кнопка старт
const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startTime);
//Кнопка стоп
const stopButton = document.querySelector('#stopButton');
stopButton.addEventListener('click', stopTime);
//Reset
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetTime);
//Кнопка изменения цвета в табло
const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', colorChanges);
//Рингтон
const player = document.querySelector('#player');


function resetTime(){
    console.log('stop');
    location.reload();
}

function stopTime(){
    clearInterval(timeRun);
    player.pause()
}

//Зупуск секундомера
function startTime(){

    let timer = document.forms.forma;
    let elemHour = forma.elements.hour.value;
    let elemMin = forma.elements.min.value;
    let elemSec = forma.elements.sec.value;
    let elementHour = elemHour;
    let elementMin = elemMin;
    let elementSec = elemSec;

    
    if(elemHour <= 0 || elemHour == ''){
        elementHour = '0'
    }
    else if (elemHour >= 1 && elemHour <= 9){
        elementHour = `${timeMinNull}${elemHour}`
    }

    if(elemMin <= 0 || elemMin == ''){
        elementMin = '00'
    }
    else if (elemMin >= 1 && elemMin <= 9){
        elementMin = `${timeMinNull}${elemMin}`
    }

    if(elemSec <= 0 || elemSec == ''){
        elementSec = '0'
    }
    else if (elemSec >= 1 && elemSec <= 9){
        elementSec = `${timeSecNull}${elemSec}`
    }

     



    timeElementSet = `${elementHour}:${elementMin}:${elementSec}`
 
    console.log(timeElementSet);
    
    
    
   timeRun = setInterval(timeOut, 1000);

    function timeOut(timeRun){
        timeSec ++;
        
        if(timeSec >= 60){
            timeMin ++;
            timeSec = 0;
        }

        else if(timeSec <= 9){
            timeSecNull  = 0;
        }

        else{
            timeSecNull = '';
        }

        if(timeMin >= 60){
            timeHour ++;
            timeMin = 0;
        }

        else if(timeMin <= 9){
            timeMinNull  = 0;
        }

        else{
            timeMinNull = '';
        }
        
        console.log(`${timeHour}:${timeMinNull}${timeMin}:${timeSecNull}${timeSec}`)
        timeElement = `${timeHour}:${timeMinNull}${timeMin}:${timeSecNull}${timeSec}`;
        timeSector.innerText = timeElement;
        timeClock.append(timeSector);
        if(timeElement == timeElementSet){
            console.log('Alarm')
            player.play();
        }
    }
    
        return timeRun;
}
// Изменения цвета табла
function colorChanges(){


    if(timeClock.classList.contains('white') == true){
        timeClock.classList.remove('white');
        timeClock.classList.add('blue');
        
        
    }
    
    else if (timeClock.classList.contains('blue') == true){
        timeClock.classList.remove('blue');
        timeClock.classList.add('green');
    }

    else if (timeClock.classList.contains('green') == true){
        timeClock.classList.remove('green');
        timeClock.classList.add('white');
    }

}











