// Problem Solving: 01
function mindGame(value) {
    let result = (value * 3 + 10) / 2 - 5;
    console.log(result);
    return result;
}
mindGame(5);
mindGame(50);
mindGame(33);

// Problem Solving: 02
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
function gemsToDiamond(gems1, gems2, gems3) {
    let total = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
    return total > 2000 ? total - 2000 : total;
  }
  console.log(gemsToDiamond(1, 1, 1));
  console.log(gemsToDiamond(20, 200, 50));
  console.log(gemsToDiamond(100, 5, 1));
    