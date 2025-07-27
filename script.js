/*
Javascript code; perhaps I should've made the buttons 1-9 its own function.
*/
//Below is the declared variable to enable the change in displayed output
const output = document.getElementById('displayed_output');

//Below are each of the buttons & their related functions. 
function pressed_0() {
    {
        output.innerText += '0'; //Adds 0 to the display.
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
    if (output.innerText.includes('/', '-', '.', '*', '+')) //Checks if any operators are in the string.
    {
        console.log('Already contains an operator.');
    } 
    else 
    {
        output.innerText += '/';  //Adds / to the display.
    }
}

function pressed_multiple() {
    if (output.innerText.includes('/', '-', '.', '*', '+')) //Checks if any operators are in the string.
    {
        console.log('Already contains an operator.');
    } 
    else 
    {
        output.innerText += '*';  //Adds * to the display.
    }
}

function pressed_subtract() {
    if (output.innerText.includes('/', '-', '.', '*', '+')) //Checks if any operators are in the string.
    {
        console.log('Already contains an operator.');
    } 
    else 
    {
        output.innerText += '-';  //Adds - to the display.
    }
}

function pressed_addition() {
    if (output.innerText.includes('/', '-', '.', '*', '+')) //Checks if any operators are in the string.
    {
        console.log('Already contains an operator.');
    } 
    else 
    {
        output.innerText += '+';  //Adds + to the display.
    }
}

function pressed_percentage() {
    if (output.innerText.includes('/', '-', '.', '*', '+', '%')) //Checks if any operators are in the string.
    {
        console.log('Already contains an operator.');
    } 
    else 
    {
        output.innerText += '%';  //Adds % to the display.
    }
}

function button_decimal() {
    if (output.innerText.includes('.')) //Checks if there are any other decimals in the string.
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
    if (output.innerText.includes('/0')) //Prevents user from dividing by 0
    {
        output.innerText = 'Error cannot divide by 0, please clear';
    } 
    try { //if the user's input is clear with no mathematical errors, the result will show.
        output.innerText = eval(output.innerText);
    }
    catch(error){ //an error will display if an incorrect/invalid equation is typed in. 
        output.innerText = 'Error, please clear';
    }
}

//For me to do later: Refactor the calculation/Input functions; add in additional features; improve calc look.