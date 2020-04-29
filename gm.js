// let buttonPlus = document.getElementById('buttonPlus');
// let buttonMinus = document.getElementById('buttonMinus');
// let buttonMultiply = document.getElementById('buttonMultiply');
// let buttonDevide = document.getElementById('buttonDevide');

let arrayOfButtons = document.getElementsByClassName('operation-button');

//let arrayOfButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];


let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function makeOperation(operationCode) {

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result;

    if (operationCode === '+') {
        result = number1 + number2;
    }else if (operationCode === '-') {
        result = number1 - number2;
    }else if (operationCode === '*') {
        result = number1 * number2;
    }else if (operationCode === '/') {
        result = number1 / number2;
    }else {
     window.alert("bag");
    }
       window.alert(result);
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}


for (let i = 0; i < arrayOfButtons.length; i++) {
    let button = arrayOfButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}

















// arrayOfButtons[0].addEventListener('click', onOperationButtonClick);
// buttonMinus[1].addEventListener('click', onOperationButtonClick);
// buttonMultiply[2].addEventListener('click', onOperationButtonClick);
// buttonDevide[3].addEventListener('click', onOperationButtonClick);

// function onButtonPlusCLick(){
//     makeOperation('+');
// }
// function onButtonMinusCLick(){
//     makeOperation('-');
// }
// function onButtonMultyplayCLick(){
//     makeOperation('*');
// }
// function onButtonDevideCLick(){
//     makeOperation('/');
// }

// function addCommonEventListener(i) {
//     arrayOfButtons[i].addEventListener('click', onOperationButtonClick);

// }


















































