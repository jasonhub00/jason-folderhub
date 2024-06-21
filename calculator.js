let display = document.getElementById('display');
console.log(display);

function zero(){
    display.value += '0';
}

function one(){
    display.value += '1';
}

function two(){
    display.value += '2';
}

function three(){
    display.value += '3';
}

function four(){
    display.value += '4';
}

function five(){
    display.value += '5';
}

function six(){
    display.value += '6';
}

function seven(){
    display.value += '7';
}

function eight(){
    display.value += '8';
}

function nine(){
    display.value += '9';
}

function allclear(){
    display.value = '';
}

function multiply(){
    display.value += '*';
}

function plus(){
    display.value += '+';
}

function minus(){
    display.value += '-';
}

function divide(){
    display.value += '/';
}

function raise(){
    display.value += '**';
}

function equals(){
    let solu = eval(display.value);
    display.value = solu;
}

function root(){
    display.value = Math.sqrt(display.value);
}





























