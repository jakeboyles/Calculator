
// DEFINE YOUR VARIABLES HERE
var display = document.querySelector('.display figure');

var displayArray = [];

var operators = ['x','+','-','=','/'];
var number = ['0','1','2','3','4','6','7','8','9'];

var allArray = [];

var displayString = "";

var currentNumber = '';

var total = 0;

var lastOperator = '';


// DEFINE YOUR FUNCTIONS HERE

function handleButtonClick(element) {
    // You can use this to get the value of the button:
    // element.value

    var buttonClickedValue = element.value;

    displayArray.push(element.value);
    display.innerHTML= addOnString();


    // Do this if its an operator
    if(element.className === "operator" && element.value !== '=')
    {
        total += parseInt(currentNumber);
        currentNumber = '';
        lastOperator = element.value;
    }

    if(element.value === '=')
    {
        if(lastOperator === "+")
        {
            total+=parseInt(currentNumber);
        }
        else if(lastOperator === '-')
        {
            total-=parseInt(currentNumber);
        }
        else if(lastOperator === '/')
        {
            total = total / parseInt(currentNumber);
        }
        else if(lastOperator === 'x')
        {
            total = total * parseInt(currentNumber);
        }

        currentNumber = total;

        display.innerHTML = total;

        displayArray = [];
        displayArray[0] = total;
        total = 0;
    }

    // Do this if its a number
    if(element.className === 'number')
    {
        currentNumber += element.value;
    }

    if (element.value === "clear"){
        clearButton();
    }

}


function addOnString(){
    displayString = "";
    displayArray.forEach(function(number){
        displayString+=number;
    });
    return displayString;
}

function clearButton(){
    displayArray = [];
    display.innerHTML = "";
    total = 0;
    currentNumber = "";
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
