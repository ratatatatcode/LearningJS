// OOP is not a tool. It is a paradigm or a style in programming.
// By Programming with Mosh

// 4 Pillars of OOP are:
// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

// In OOP, we combine a group of related variables (as properties) and
// functions (as methods) into a unit, we call this unit as object.

// Car
// make, model, colar (property)
// move, stop (method)

// "The best functions are those with no parameters!" - Uncle Bob (Robert C. Martin)
// That is encapsulation.
/*
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWage());
*/

// Abstraction
// we can hide some of the properties and methods from the outside
// Benefits:
// Simpler Interface
// Reduce the Impact of Change

// Inheritance
// Eliminate redundant code
/*
HTMLElement
hidden
innerHTML

click()
focus()

TextBox, Select, Checkbox can inherit the properties and methods from the HTMLElement
*/

// Poly(Many)morphism(form)
/*
Instead of creating switch/conditional statements like case 'select' 'text' 'checkbox'
You can make use these:
TextBox render()
Select render()
Checkbox render()
*/

/* Benefits of OOP
Using [Encapsulation], we group related variables and functions together, reduce complexity
and increase reusability
With [Abstraction], we hide the details and the complexity and show only the essentials, reduces complexity
and increase impact of changes
[Inheritance], eliminate redundant code
[Polymorphism], refactor ugly swith/case statements */

// Fundamentals of Objects
/* const circle = { // Object literal syntax
    radius: 1, // properties (to hold values)
    location: {
        x: 1,
        y: 1
    },
    draw: function() { // method (used to define logic)
        console.log('draw');
    }
}; */
// If object has one or more methods, we say that object has behavior like a person

// Factory Function
/* function createCircle(radius) {
    return {  
        radius, // instaed of writing radius: radius
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1); */
// circle.draw();

// Constructor Function
/* function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    // by default, 'this' points to a global object (node env)
    // in browser, the global object is window object
}

const anotherCircle = new Circle(1); */
// 'new operator' will create new object and will set 'this' to point that object
// anotherCircle.draw();

// Every object has a constructor property and that
// references the function that was used to create an object

// Functions are Objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({},1); // {} will reference the object
Circle.apply({},[1]);

const anotherCircle = new Circle(1);

/* const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`); */

// Two Categories of Types
// Value Types (primitives): number, string, boolean, symbol, undefined, null
// Reference Types: object, function, array

// 32:00 https://www.youtube.com/watch?v=PFmuCDHHpwk&list=RDCMUCWv7vMbMWH4-V0ZXdmDpPBA&index=13