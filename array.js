// See Array Length Number
var friendsAge = [11, 14, 16, 44, 48, 67, 87, 99, 50];
console.log(friendsAge.length); 

// Pop And Shift Property
var picnicFee = [200, 300, 400, 500, 600, 700, 800];
// Remove Last Element In Array
picnicFee.pop()
// Remove First Element In Array
picnicFee.shift()               
console.log(picnicFee);

var person = ['Salam', 'Rafiq', 'Jabbar', 'Harun', 'Asad'];
// Add Element At Last In Array
person.push('Rana')
// Add Element At First In Array
person.unshift('Rahman')
console.log(person);
// Get Element Position And Number By Index
var numbers = [23, 34, 44, 45, 56, 67, 78, 89];
// Know Element Position
console.log(numbers[4]);

var numbers = [23, 34, 44, 45, 56, 67, 78, 89];
// Second Method Get Element Position
var element = numbers[6];
console.log(element)
// Set Element Replace Value
numbers[3] = 50;
console.log(numbers)
// Get Index Of An Element
var positionIndex = numbers.indexOf(78);
console.log(positionIndex);