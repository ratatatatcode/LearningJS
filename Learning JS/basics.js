// Learning Javascript with Node.JS
// by Bob Tober (ft. PedroTech)

// To run: node <filename/filename.js> + enter
// Shortcut: Ctrl + ~ (Opening terminal), Arrow Up Key to render last input in terminal

// ==========================================================================================
// Variables, Data Types, Operators, Loops, Arrays, Scope, Conditionals won't be seen here.

// Variables are like a storage of your data and variable name is the label of your storage
// You can use different block scoped, let var const
// eg. let name = "Name"; // This is a string
// String is a data type. We also have Integer, Boolean, Float, Char, (Function, Object (?))
// You can do this, console.log(typeof arr), to check the data typeof the variables
// . <- Dot Operator, (Property) Access Operator

// ==========================================================================================
// Arguments & Parameter (not sure with the positions of args and params)
// function parameterArgument(params) {
//     console.log(params);
// }

// parameterArgument("Arguments");

// ==========================================================================================
// Returning Functions from Functions

// Don't do this
// var myVariable = "I am at the global scope.";
// var myFunction = function() {
//     console.log("Me too!");
// }

// ------------------------------------------------------------------------------------------
/* function one() {
    return "One";
}

let value = one;
console.log(typeof value); // function
console.log(typeof one); // function

console.log(value()); */

// ------------------------------------------------------------------------------------------
/* function two() {
    return function () {
        console.log("Two");
    }
}

let myFunction = two();
myFunction(); */

// ------------------------------------------------------------------------------------------
/* function three() {
    return function() {
        return "Three";
    }
}

console.log(three()); // This will return [Function (anonymous)]
console.log(three()()); */

// ==========================================================================================
/* Object Literals

let car = {
    make: "BMW",
    model: "7511",
    year: 2010,
    getPrice: function(quantity) {
        return 5000 * quantity;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
};

car.printDescription();
// console.log(car.getPrice(3));
console.log(car.year);

car['year'] = 2020;
console.log(car['year']); // Replace 2010 by 2020
console.log(car[1]); // undefined

------------------------------------------------------------------------------------------
var anotherCar = {};
anotherCar.whatever = "Bob";
console.log(anotherCar.whatever);

------------------------------------------------------------------------------------------
var a = {
    myProperty: {b: "Hi"}
};
console.log(a.myProperty.b);

------------------------------------------------------------------------------------------
var c = {
    myProperty: [
        {d: "this"},
        {e: "can"},
        {f: "get"},
        {g: "crazy"}
    ]
};
console.log(c.myProperty[1]);

------------------------------------------------------------------------------------------
let carLot = [
    {year: 2017, make: "Toyota", model: "4Runner"},
    {year: 2015, make: "BMW", model: "5281"},
    {year: 1982, make: "Buick", model: "Skylark"}
];
console.log(carLot[2].year) */

// Arrow Function
/* const printHelloWorld = () => {
    console.log("Hello World");
}

printHelloWorld(); */

// Conditional (Ternary Operator)
/* let age = 21;
let name = age > 10 ? "James" : "Not James";
console.log(name); */