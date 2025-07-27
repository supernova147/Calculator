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
let output = document.getElementById('displayed_output');

function pressed_0() {
    {
        let output = document.getElementsByClassName('cal_buttons');
        output.innerText += '0';
    }
}

function pressed_1() {
    {
        let output = document.getElementsByClassName('cal_buttons');
        output.innerText += '1';
    }
}

function pressed_2() {
    {
        let output = document.getElementById('displayed_output');
        output.append += '2';
    }
}

function pressed_3() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '3';
    }
}

function pressed_4() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '4';
    }
}

function pressed_5() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '5';
    }
}

function pressed_6() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '6';
    }
}

function pressed_7() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '7';
    }
}

function pressed_8() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '8';
    }
}

function pressed_9() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '9';
    }
}

function pressed_divide() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '/';
    }
}

function pressed_multiple() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '*';
    }
}

function pressed_subtract() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '-';
    }
}

function pressed_addition() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '+';
    }
}

function pressed_percentage() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '%';
    }
}

function button_decimal() {
    if (displayed_output.includes('.'))
    {
        console.log('Already contains a decimal.')
    }
    else 
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '.';
    }
}

function pressed_clear() {
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '';
    }
}

function calculate() {
    if (displayed_output.output.includes('/0'))
    {
        let output = document.getElementById('displayed_output');
        output.innerText = 'Error cannot divide by 0.';
    }
    else 
    {
        output.innerHTML = eval(output.innerText);
    }
}
//Refactor the calculation/Input functions

//dyanmic array for memory? and then a function to clear the memory.
// Make the input function a loop
//percentage button?
//color button function?
//special button - maybe an animation?
//afterwards, may provide additional calc functions ie: exponentials, etc.
