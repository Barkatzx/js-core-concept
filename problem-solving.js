// Problem 1: Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo () function after Printing. What will be the output? Now call the foo() to see the output.
// Solution:
function bar(){
    console.log('bar');
}
function foo(){
    console.log('foo');
    bar()
}
foo()
// Problem 2: The standard height of a volleyball player is 7 feet. Jim wants to join volleyball team. So he decided to measure his height to see if he meets the standard. Calculate his height in feet.
// Solution:
const number = -78; 
const answer = Math.abs(number); 
console.log(answer);

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))

  let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum)