"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somarNums(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => console.log(somarNums(Number(input1.value), Number(input2.value))));
//
//
/*
button?.addEventListener('click', () => {
    if (input1 && input2) {
        console.log(somarNums(Number(input1.value), Number(input2.value)));
    }
})*/ 
