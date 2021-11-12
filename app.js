const input = document.querySelector('.userInput');
const btn1 = document.querySelector('.btn1-translate');
const btn2 = document.querySelector('.btn2-translate')
const btn3 = document.querySelector('.btn3-translate')
const output = document.querySelector('.output')
 
function handleInput(){
    var inputTxt = input.value;
    output.innerHTML = inputTxt;

}

function changeToRed(){
    var txt = output;
    var style = window.getComputedStyle(txt, null).getPropertyValue('color, fontWeight');
    txt.style.color = 'red';
    txt.style.fontWeight = 'bold';
}

function changeToBlue(){
    var txt = output;
    var style = window.getComputedStyle(txt, null).getPropertyValue('color, fontWeight');
    txt.style.color = 'blue';
    txt.style.fontWeight = 'bold';
}
function changeToGreen(){
    var txt = output;
    var style = window.getComputedStyle(txt, null).getPropertyValue('color, fontWeight');
    txt.style.color = 'green';
    txt.style.fontWeight = 'bold';
}


input.addEventListener("input", handleInput);
btn1.addEventListener("click", changeToRed);
btn2.addEventListener("click", changeToBlue);
btn3.addEventListener("click", changeToGreen);