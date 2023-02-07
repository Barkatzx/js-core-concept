// Problem Solving: 01
// Description: At first i take a function. Which name is mindGame and parameter "value". Then I declare a variable and first i do multiplication then addition and then divide and last subtraction. Then i return variable.
function mindGame(value) {
    let result = (value * 3 + 10) / 2 - 5;
    console.log(result);
    return result;
}
mindGame(5);
mindGame(50);
mindGame(33);

// Problem Solving: 02
// Description: This function evenOdd i take a string "Name" as an argument and i declare a conditional for its length even or odd. This function i do modulus operator % to calculate the remainder of the division of Name.length by 2. If the remainder is equal to 0, it means the length of the Name is even and the function returns string "even". Otherwise, if the remainder is not equal to 0, it means the length of Name is odd and the function returns string "odd".
function evenOdd(Name) {
    if (Name.length % 2 === 0){
    console.log("It's even");
    return "even";
 }
    else {
    console.log("It's Odd");
    return "odd";
}
}
evenOdd("Phero");
evenOdd("Batch7");
evenOdd("chatgpt");

// Problem Solving: 03
// Description: This function isLGSeven i take a parameter (value) and returns the result of a calculation based on the value. If value is less than 7, the function returns value subtracted from 7. If value is greater than or equal to 7, the function returns 2 multiplication value.
function isLGSeven(value) {
    if (value < 7) {
    return value - 7;
}
    else {
    return 2 * value;
}
}
console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));

// Problem Solving: 04
// Description: This function findingBadData i take a parameter (numArray) as an argument. And i declare a element in numArray using for loop and a counter variable count. If an element in numArray is less than 0, the count is incremented. After the loop, the function returns the final value of count, which represents the number of negative numbers in numArray.
function findingBadData(numArray) {
    let count = 0;
    for (let i = 0; i < numArray.length; i++){
      if (numArray[i] < 0) {
        count++;
      }
    }
    return count;
  }
console.log(findingBadData([1, 2, 3]));
console.log(findingBadData([2, -5, -7, -13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));

// Problem Solving: 05
// Description: This function i take parameter which three arguments gems1, gems2, and gems3 representing the number of gems of three different types. Then i declare a variable. And calculates the total value of the gems by multiplying each type of gem by a specific value (21, 32, and 43) and adding them together. If the total value is greater than 2000, the function returns the total value subtraction 2000. If the total value is less than or equal to 2000, the function returns the total value.
function gemsToDiamond(gems1, gems2, gems3) {
    let total = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
    return total > 2000 ? total - 2000 : total;
  }
  console.log(gemsToDiamond(1, 1, 1));
  console.log(gemsToDiamond(20, 200, 50));
  console.log(gemsToDiamond(100, 5, 1));
    