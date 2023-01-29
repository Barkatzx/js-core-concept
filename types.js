// Types Of Data Type: How To See Type Of Data Type?
var person = 'John Doe';
console.log(typeof person);
var marks = 67;
console.log(typeof marks);
var serious = true;
console.log(typeof serious);
var romantic;
console.log(typeof romantic);

// Fixed Value In 0.1 & 0.2 Problem
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2; //Many value added in console
sum = sum.toFixed(2)   //It's the solution for this problem solving
sum = parseFloat(sum) 
console.log(sum)