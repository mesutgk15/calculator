// operator functions to be used in calculator
function add(input1,input2) {
    return input1+input2
}
function substract(input1,input2) {
    return input1-input2
}
function multiply(input1,input2) {
    return input1*input2
}
function divide(input1,input2) {
    return input1/input2
}

// function to call the needed operator functions   
function operate (num1,num2,oprAdd) {
    if (oprAdd=="addition") {
        return add(num1,num2)
    } else if(oprAdd=="subtraction") {
        return substract(num1,num2)
    } else if(oprAdd=="multiplication") {
        return multiply(num1,num2)
    } else if(oprAdd=="division") {
        return divide(num1,num2)
    }
}

