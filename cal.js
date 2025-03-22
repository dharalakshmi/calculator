let display = document.getElementById('display');
let currentInput = '0';

// Function to append numbers
function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.value = currentInput;
}

// Function to append operators
function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        display.value = currentInput;
    }
}

// Function to calculate result
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

// Detect Backspace and Reset if text is selected
display.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' && window.getSelection().toString() !== '') {
        event.preventDefault(); // Prevent normal backspace behavior
        currentInput = '0';
        display.value = currentInput;
    }
});
