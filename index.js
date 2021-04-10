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


})