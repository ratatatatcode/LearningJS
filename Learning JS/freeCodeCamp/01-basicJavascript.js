// Basic Javascript

// You can comment single line using "//" and "/* */"
// In VS Code, you can "Ctrl + /" to comment lines

// To declare variables, you can use "var" "let" and "const"
// let variableName;

// In naming variables, it is recommended to use camelCase;
// Here are some examples: firstName, secondNumber, thirdSequence

// To declare variables
// var num1;
// num1 = 1;
// or var num2 = 2;

// You can also do this:
// var num1 = 1;
// var num2 = num1; // num2 == 2 (= is an assignment operator, == means equal)

// You are allowed to not put ; after line of code but it is a good practice to put one

// var [myFirstName, myLastName] = ["James", "Magnaye"]; // You can assign like this

// Data Types
// String = "This is a string"
// Int = 0-9
// Float = 0.00, you might encounter double, double can represent much larger numbers than a float
// Boolean = true/false (1/0);

// So unlike var, when you use let, a variable with the same name can only be declared once.
// const won't allowed you to change its value

// You can also do this:
// let addTest = 1 + 1; // addTest == 2 (+, -, *, /)
// addTest % 2 == 0 (addTest / 2 = 0 (% is use to get the remainder of addTest/2)

// Increment:
// let num = 2;
// num++; // 2 + 1 (post-increment)
// console.log(num); // Output: 3
// let newNum = 2;
// ++num; // 1 + 2 (pre-decrement)
// console.log(newNum); // Output: 3

// Decrement:
// let num = 2;
// num--; // Decrease num by 1 (post-decrement), so num is now 1
// console.log(num); // Output: 1
// let newNum = 2;
// --newNum; // Decrease newNum by 1 (pre-decrement), so newNum is now 1
// console.log(newNum); // Output: 1

// Increment and decrement are very useful for loops, especially for 'for' loops (for me).
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// Output:
// 0 (i == 0) then return to the for statement (i++, 0 + 1)
// 1 (i == 1) and repeat (i++, 1 + 1 and so on...)
// 2
// 3
// 4

// Escaping Literal Quotes in Strings
// let myMessage = "Hello, I am \"James\"" // Output: Hello, I am "James"
// Examples below are from GPT
// \': Single quote
// \": Double quote
// \\: Backslash
// \n: Newline
// \r: Carriage return
// \t: Tab
// \b: Backspace
// \f: Form feed
// \v: Vertical tab

// console.log('This is a single quote: \'');
// console.log("This is a double quote: \"");
// console.log('This is a backslash: \\');
// console.log('This is a newline:\nSecond line');
// console.log('This is a carriage return:\rSecond line');
// console.log('This is a tab:\tTabbed text');
// console.log('This is a backspace:\bBackspaced text');
// console.log('This is a form feed:\fForm feed text');
// console.log('This is a vertical tab:\vVertical tabbed text');

// Output:
// This is a single quote: '
// This is a double quote: "
// This is a backslash: \
// This is a newline:
// Second line
// Second linearriage return:
// This is a tab:  Tabbed text
// This is a backspaceBackspaced text
// This is a form feed:♀Form feed text
// This is a vertical tab:♂Vertical tabbed text

// You won't need to do this \" when you use single quote to open and close your string
// const webLink = 'The link is "freeCodeCamp.org"';

// Concatenating Strings with Plus Operator
// You can use "+" to concatinate strings.
// If you use the "+" with a string and another type (e.g., a number),
// it will convert the non-string operand to a string and then perform concatenation:
// const firstName = "James";
// Using backticks (``) and ${variableName} will allow you to place variable inside a string.
// const example = `My first name is ${firstName}. ` + `My second name is secondName.`;
// console.log(example);

// 1:08:36