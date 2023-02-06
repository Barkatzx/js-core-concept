// Parameter 
function startFan(){
    console.log('Stand Up');
    console.log('Walk Towards The Switch');
    console.log('Press The Switch');
}
startFan();

function bringSingara(money){
    console.log('Taka Dilam:', money);
    console.log('Give me a Singara');
}
bringSingara(100);

function add(num1, num2){
    console.log('Going to add:', num1, num2);
}
add(125, 123);

function sum(a, b, c, d, e){
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(10, 10, 10, 10, 10);
// Return Type Function

function movie(){

    return "Din-The day";
  
    return "Poran";
  
    return "Hawa";
  
  }
  
  console.log(movie());

  function print(a, b, c){
    return a+2;
    return a*b;
    return b*c+a;
  }
  console.log(print(1,2,3));