// Calculator program

const display = document.getElementById("display");

function verifyIfIsOperator(input) {
    if (input == "*")
        return true;
    else if (input == "%")
        return true;
    else if (input == "/")
        return true;
    else if (input == "-")
        return true;
    else if (input == "+")
        return true;
    else
        return false;
}

function appendToDisplay(input) {
    let = display.value.slice(-1); //getting the las element
    if ((verifyIfIsOperator(let) && verifyIfIsOperator(input))) { }
    else display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}

function deleteLastItem() {
    display.value = display.value.slice(0, -1); //returns the string without the last character
}