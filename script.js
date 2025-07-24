/*
For the calculator to work.. 
I need each button to capture user input & save it 
ie: any numeral value & the function has to continue running 
until an arthimetric value is pressed. 
(& the decimal point has to be pressed ONCE and then break (maybe a switch statement?)
then; after an arthmetric value is pressed, the user can enter another number
then the calculation is made with enter.

So: 2 values have to be saved. num1 & num2

*/
let output = document.getElementById('displayed_output');


function pressed_1() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementsByClassName('cal_buttons');
        output.innerText = '1';
    }
    else 
    {
        output.innerText += '1';
    }
}

function pressed_2() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.append = '2';
    }
    else 
    {
        output.innerText += '2';
    }
}

function pressed_3() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '3';
    }
    else 
    {
        output.innerText += '3';
    }
}

function pressed_4() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '4';
    }
    else 
    {
        output.innerText += '4';
    }
}

function pressed_5() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '5';
    }
    else 
    {
        output.innerText += '5';
    }
}

function pressed_6() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '6';
    }
    else 
    {
        output.innerText += '6';
    }
}

function pressed_7() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '7';
    }
    else 
    {
        output.innerText += '7';
    }
}

function pressed_8() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '8';
    }
    else 
    {
        output.innerText += '8';
    }
}

function pressed_9() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '9';
    }
    else 
    {
        output.innerText += '9';
    }
}

function pressed_divide() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '/';
    }
    else 
    {
        output.innerText += '/';
    }
}

function pressed_multiple() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '*';
    }
    else 
    {
        output.innerText += '*';
    }
}

function pressed_subtract() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '-';
    }
    else 
    {
        output.innerText += '-';
    }
}

function pressed_addition() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '+';
    }
    else 
    {
        output.innerText += '+';
    }
}

function pressed_percentage() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '%';
    }
    else 
    {
        output.innerText += '%';
    }
}

function pressed_clear() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText = '';
    }
    else 
    {
        output.innerText = '';
    }
}

function calculate() {
    if (displayed_output == 'Enter a calculation!')
    {
        let output = document.getElementById('displayed_output');
        output.innerText += '';
    }
    else 
    {
        output.innerHTML = eval(output.innerText);
    }
}

//dyanmic array for memory? and then a function to clear the memory.
// Make the input function a loop
//percentage button?
//color button function?
//special button - maybe an animation?
//afterwards, may provide additional calc functions ie: exponentials, etc.
