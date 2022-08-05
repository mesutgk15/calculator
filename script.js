// operator functions to be used in calculator
function add(input1,input2) {
    return (+input1)+(+input2)
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

const digit = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const displayInProg = document.querySelector(".displayInProg");
const clear = document.querySelector(".ac");
const decimalBtn = document.querySelector(".decimal");
const divBtn = document.querySelector(".div")
const multBtn = document.querySelector(".mult")
const subtBtn = document.querySelector(".subt")
const sumBtn = document.querySelector(".sum")
const equalsBtn = document.querySelector(".equals")

//populate the digits in display screen 
function populateValue () {        
   
    display.textContent=display.textContent+this.value; 

}

digit.forEach(element => {
    element.addEventListener("click",populateValue)
});

// decimal point needs to be added once only, restrores the value on clear or next operation 
function populateValueDecimal () {        
   
    display.textContent=display.textContent+this.value; 
    decimalBtn.value=""
}

decimalBtn.addEventListener("click",populateValueDecimal)

function clearDisplay () {
    display.textContent=""
    firstValue="";
    secondValue="";
    operand="";
    decimalBtn.value="."
    displayInProg.textContent=""
}
clear.addEventListener("click",clearDisplay);

let firstValue;
let secondValue;
let operand;

firstValue="";
secondValue="";
operand="";



function storeValue () {
   if (firstValue==0) {
    window.globalThis =firstValue=display.textContent;
    window.globalThis =operand=this.value;
    display.textContent="";
    decimalBtn.value="."
    } 
    else {
    getResult();
    window.globalThis =firstValue=display.textContent;
    window.globalThis =operand=this.value;
    displayInProg.textContent=result;
    display.textContent=""
    decimalBtn.value="."
    }
}

divBtn.addEventListener("click",storeValue);
multBtn.addEventListener("click",storeValue);
subtBtn.addEventListener("click",storeValue);
sumBtn.addEventListener("click",storeValue);

function getResult () {
    
    window.globalThis = secondValue= display.textContent;
    window.globalThis= result = operate(firstValue,secondValue,operand);
    display.textContent=result;
    decimalBtn.value="."
    displayInProg.textContent="";
}
equalsBtn.addEventListener("click",getResult);







