let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let deleteLast = document.getElementById("deleteLast");
let deleteAll= document.getElementById("deleteAll");
let displayProblem = document.getElementById("displayProblem");
let problem = document.getElementById("problem");
let answer = document.getElementById("answer");

let problemContainer = [];
function printProblem() {
    for(i = 0; i < problemContainer.length; i++) {
        return problemContainer[i];
    }
}

let value = [];
function printValue() {
    for(ctr = 0; ctr < value.length; ctr++) { 
        problem.setAttribute('value', value.join(""));
    }
}

let showProblem = [];
function printProblem() {
    for(ctr = 0; ctr < value.length; ctr++) { 
        displayProblem.setAttribute('value', showProblem.join(""));
    }
}

one.addEventListener("click", function() {
    value.push(1);
    showProblem.push(1);
    printValue();
    printProblem();
});

two.addEventListener("click", function() {
    value.push(2);
    showProblem.push(2);
    printValue();
    printProblem();
});

three.addEventListener("click", function() {
    value.push(3);
    showProblem.push(3);
    printValue();
    printProblem();
});

four.addEventListener("click", function() {
    value.push(4);
    showProblem.push(4);
    printValue();
    printProblem();
});

five.addEventListener("click", function() {
    value.push(5);
    showProblem.push(5);
    printValue();
    printProblem();
});

six.addEventListener("click", function() {
    value.push(6);
    showProblem.push(6);
    printValue();
    printProblem();
});

seven.addEventListener("click", function() {
    value.push(7);
    showProblem.push(7);
    printValue();
    printProblem();
});

eight.addEventListener("click", function() {
    value.push(8);
    showProblem.push(8);
    printValue();
    printProblem();
});

nine.addEventListener("click", function() {
    value.push(9);
    showProblem.push(9);
    printValue();
    printProblem();
});

zero.addEventListener("click", function() {
    value.push(0);
    showProblem.push(0);
    printValue();
    printProblem();
});

let operation;
let num1 = 0, num2 = 0, result = 0;

add.addEventListener("click", function() {
    showProblem.push("+");
    printValue();
    printProblem();
    num1 = parseInt(value.join(""));
    value = [];
    result = num1 + result;
    answer.innerHTML = result;
    operation = "+";
    value = [];
});

subtract.addEventListener("click", function() {
    showProblem.push("-");
    printValue();
    printProblem();
    num1 = parseInt(value.join(""));
    value = [];
    result = num1 - result;
    answer.innerHTML = result;
    operation = "-";
    value = [];
});

multiply.addEventListener("click", function() {
    showProblem.push("*");
    printValue();
    printProblem();
    num1 = parseInt(value.join(""));
    value = [];
    result = num1 * result;
    answer.innerHTML = result;
    operation = "*";
    value = [];
});

divide.addEventListener("click", function() {
    showProblem.push("/");
    printValue();
    printProblem();
    num1 = parseInt(value.join(""));
    value = [];
    result = result / num1;
    answer.innerHTML = result;
    operation = "/";
    value = [];
});

deleteAll.addEventListener("click", function() {
    displayProblem.setAttribute('value', "");
    answer.innerHTML = 0;
    value = [];
    showProblem = [];
});

equal.addEventListener("click", function() {
    console.log(showProblem);
    if(operation == "+") {
        printProblem();
        printValue();
        num1 = parseInt(value.join(""));
        value = [];
        result = num1 + result;
        answer.innerHTML = result;
        operation = "+";
        value = [];
    }

    else if(operation == "-") {
        printProblem();
        printValue();
        num1 = parseInt(value.join(""));
        value = [];
        result -= num1;
        answer.innerHTML = result;
        operation = "-";
        value = [];
    }

    else if(operation == "*") {
        printValue();
        printProblem();
        num1 = parseInt(value.join(""));
        value = [];
        result = num1 * result;
        answer.innerHTML = result;
        operation = "*";
        value = [];
    }

    else if(operation == "/") {
        printProblem();
        printValue();
        num1 = parseInt(value.join(""));
        value = [];
        result = result / num1;
        answer.innerHTML = result;
        operation = "/";
        value = [];
    }
});