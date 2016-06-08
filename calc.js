
// DEFINE YOUR VARIABLES HERE
var display = document.querySelector('.display figure');

var firstNumber = null;
var secondNumber = null;
var operator = null;

var currentNumber = "";

// DEFINE YOUR FUNCTIONS HERE

function handleButtonClick(element) {
    // You can use this to get the value of the button:
    // element.value
    

    if (element.className === "operator" && firstNumber === null)
    {
        firstNumber = parseFloat(currentNumber);
        operator = element.value;
        display.innerHTML = firstNumber + operator;

        //Reset Current Number
        currentNumber= "";
    }
    else if(element.value === "=")
    {
        secondNumber = parseFloat(currentNumber);
        var total = doMath(operator,firstNumber,secondNumber);
        display.innerHTML = total;

        // Resets
        currentNumber = "";
        firstNumber = total;
        secondNumber = null;
        operator = null;
    }
    else if(operator === null && firstNumber !==null)
    {
        secondNumber = 0;
        var total = doMath(operator,firstNumber,secondNumber);

        // Resets
        operator = element.value;
        display.innerHTML = firstNumber+operator;
    }
    else if (element.className === "operator" && firstNumber !== null) 
    {
        secondNumber = parseFloat(currentNumber);
        var total = doMath(operator,firstNumber,secondNumber);

        operator = element.value;
        display.innerHTML = total+operator;
        currentNumber = "";

        firstNumber = total;
        secondNumber = null;
    }
    else if(element.className === 'number' && firstNumber === null)
    {
        currentNumber += element.value;
        display.innerHTML = currentNumber;
    }
    else if(element.className === 'number' && firstNumber !== null)
    {
        currentNumber += element.value;
        display.innerHTML = firstNumber+operator+currentNumber;
    }

    // If the clear button is clicked.
    if(element.value === 'clear')
    {
        clear();
    }

}


function doMath(operator,firstNumber,secondNumber) {

    var total = 0;

    if(operator === "+") 
    {
        total = firstNumber+secondNumber;
    }
    else if(operator === '-')
    {
        total = firstNumber-secondNumber;
    }
    else if(operator === '/')
    {
        total = firstNumber / secondNumber;
    }
    else if(operator === 'x')
    {
        total = firstNumber * secondNumber;
    }

    return total;

}

function clear(){
    firstNumber = null;
    secondNumber = null;
    operator = null;
    currentNumber = '';
    display.innerHTML = '';
}


/**
 * This event handler will fire for ALL button clicks. You need to decide 
 * what to do based on which button was clicked in the handler function
 * defined above.
 * 
 * DO NOT CHANGE THIS!
 */
[].slice.call(document.querySelectorAll('button')).forEach(function(element) {
    element.addEventListener('click', function() {
        handleButtonClick(this);
    });
});



/** **************************************************************
 * These are our tests. If any of them fail you will see a message 
 * in the developer tools "Console" - in which case the assignment 
 * will NOT be considered complete!
 * 
 *                  DO NOT CHANGE THESE LINES
 ****************************************************************/

document.querySelector('.run-tests').addEventListener('click', function() {
    var testOutput = document.querySelector('figure');
    
    try {
        // Button click handler + Addition (multiple inputs)
        handleButtonClick({ value: '1' });
        console.assert(testOutput.innerHTML === '1', testOutput.innerHTML);
        handleButtonClick({ value: '3' });
        console.assert(testOutput.innerHTML === '13', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '13+', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '13+7', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '13+7+', testOutput.innerHTML);
        handleButtonClick({ value: '2' });
        console.assert(testOutput.innerHTML === '13+7+2', testOutput.innerHTML);
        handleButtonClick({ value: '.' });
        console.assert(testOutput.innerHTML === '13+7+2.', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '13+7+2.7', testOutput.innerHTML);
        handleButtonClick({ value: '=' });
        console.assert(testOutput.innerHTML === '22.7', testOutput.innerHTML);

        // Clear
        handleButtonClick({ value: 'clear' });
        console.assert(testOutput.innerHTML === '', testOutput.innerHTML);

        // Addition
        console.assert(addToTotal(10, 3) === 13);
        console.assert(addToTotal('10', 3) === 13);
        console.assert(addToTotal('0', 13) === 13);
        console.assert(addToTotal(0, 13) === 13);
        console.assert(addToTotal('-20', 10) === -10);

        handleButtonClick({ value: 'clear' });

        // Subtraction
        console.assert(subtractFromTotal(10, 30) === 20);
        console.assert(subtractFromTotal('10', 30) === 20);
        console.assert(subtractFromTotal('0', 13) === 13);
        console.assert(subtractFromTotal(0, 13) === 13);
        console.assert(subtractFromTotal('-20', 10) === 30);

        handleButtonClick({ value: 'clear' });

        // Division
        console.assert(divideByTotal(10, 30) === 3);
        console.assert(divideByTotal('10', 30) === 3);
        console.assert(divideByTotal('0', 13) === 0);
        console.assert(divideByTotal(0, 13) === 0);
        console.assert(divideByTotal('-2', 10) === -5);

        handleButtonClick({ value: 'clear' });

        // Multiplication
        console.assert(multiplyWithTotal(10, 30) === 300);
        console.assert(multiplyWithTotal('10', 30) === 300);
        console.assert(multiplyWithTotal('0', 13) === 0);
        console.assert(multiplyWithTotal(0, 13) === 0);
        console.assert(multiplyWithTotal('-2', 10) === -20);

        handleButtonClick({ value: 'clear' });
        
    } catch(e) {
        console.error('There was an error during the test run:', e);
    }
});