const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

// Update the display of the calculator 
function updateDisplay() {
    //select the element with class of 'calculator-screen'
    const display = document.querySelector('.calculator-screen');
    //update the value of the element with the contents of 'displayValue'
    display.value = calculator.displayValue;
}

updateDisplay();

//Handle the key presses
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //Access the clicked element
    const { target } = event;
    //check target is a button
    //if not exit the funtion
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('all-clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
})

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot
    }
}