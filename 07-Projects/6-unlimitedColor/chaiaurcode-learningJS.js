//1. Generate any random color

const randomColor = function() {
    const hexStr = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hexStr[Math.floor(Math.random() * 16)];
    }
    return color;
};

//Global variable
let intervalId;

const startChangingColor = function() {
    
    //if intervalId is empty, then only set it with new id. Prevents value overidding on intervalId var 
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;  //good practice - when intervalId var usage is done, we are deallocating its memory 
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);