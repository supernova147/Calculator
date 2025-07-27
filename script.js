/*
For the calculator to work.. 
I need each button to capture user input & save it 
ie: any numeral value & the function has to continue running 
until an arthimetric value is pressed. 
(& the decimal point has to be pressed ONCE and then break (maybe a switch statement?)
then; after an arthmetric value is pressed, the user can enter another number
then the calculation is made with enter.

So: 2 values have to be saved. num1 & num2
Edit: 
*/
//Below are the declared variables to enable the change in displayed output
// as well as capturing errors later on.
const output = document.getElementById('displayed_output');
const lastentry = output.innerText(output.length - 1);
const operators = ['/', '-', '.', '*', '+'];
//Below are each of the buttons & their related functions. 
function pressed_0() {
    {
        output.innerText += '0'; //Adds 0 to the display.
        //console.log(lastentry); test output
    }
}

function pressed_1() {
    {
        output.innerText += '1'; //Adds 1 to the display.
    }
}

function pressed_2() {
    {
        output.innerText += '2'; //Adds 2 to the display.
    }
}

function pressed_3() {
    {
        output.innerText += '3'; //Adds 3 to the display.
    }
}

function pressed_4() {
    {
        output.innerText += '4'; //Adds 4 to the display.
    }
}

function pressed_5() {
    {
        output.innerText += '5'; //Adds 5 to the display.
    }
}

function pressed_6() {
    {
        output.innerText += '6'; //Adds 6 to the display.
    }
}

function pressed_7() {
    {
        output.innerText += '7'; //Adds 7 to the display.
    }
}

function pressed_8() {
    {
        output.innerText += '8'; //Adds 8 to the display.
    }
}

function pressed_9() {
    {
        output.innerText += '9'; //Adds 9 to the display.
    }
}

function pressed_divide() {
    // if (output.innerText.includes('/')) //rather than limiting the user, we should just replace the previous operator.
    // {
    //     console.log('Already contains a division operator.')
    //     const lastentry = output.length - 1; 
    // } //Need to prevent "stacking operators" 
    if (lastentry.includes(operators)) { 
        console.log("replace last sign") 
        output.innerText += 'no'; 
    }
    else 
    {
        output.innerText += '/';  //Adds / to the display.
    }
}

function pressed_multiple() {
    if (output.innerText.includes('*')) //fix this
    {
        console.log('Already contains a multiplication operator.')
    }
    else 
    {
        output.innerText += '*';  //Adds * to the display.
    }
}

function pressed_subtract() {
    if (output.innerText.includes('-')) //fix this
    {
        console.log('Already contains a subtraction operator.')
    }
    else 
    {
        output.innerText += '-';  //Adds - to the display.
    }
}

function pressed_addition() {
    if (output.innerText.includes('+')) //fix this
    {
        console.log('Already contains an addition operator.')
    }
    else 
    {
        output.innerText += '+';  //Adds + to the display.
    }
}

function pressed_percentage() {
     if (output.innerText.includes('%')) //fix this
    {
        console.log('Already contains a percentage symbol.')
    }
    else 
    {
        output.innerText += '%';  //Adds % to the display.
    }
}

function button_decimal() {
    if (output.innerText.includes('.')) //fix this
    {
        console.log('Already contains a decimal.')
    }
    else 
    {
        output.innerText += '.';  //Adds . to the display.
    }
}

function pressed_clear() {
    {
        output.innerText = '';  //Clears the display via changing the string to a blank space.
    }
}

function calculate() {
    if (output.innerText.includes('/0'))
    {
        output.innerText = 'Error cannot divide by 0.';
    } //Need to prevent an output ending in any operator ie: 1 +
    else if (lastentry.includes(operators)){ 
        output.innerText = ('Error, needs another number');
        await.delay(2000);
        output.innerText = ('');
    }
// document.getElementById('displayed_output') innerText.charAt(output.length - 1);
    else
    {
        output.innerText = eval(output.innerText) 
    }
}
//Refactor the calculation/Input functions

//dyanmic array for memory? and then a function to clear the memory.
// Make the input function a loop
//percentage button?
//color button function?
//special button - maybe an animation?
//afterwards, may provide additional calc functions ie: exponentials, etc.
