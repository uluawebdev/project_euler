/*function sumOfMultiples() {
  let sum = [];
  for(let i = 1; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0) {
      sum.push(i);
    var result = sum.reduce(function(a, b){
        return a + b;
      });
    }
  }
  console.log(result);
  return result;
}
sumOfMultiples(); */

function multiplesOf(a, b, target) {
  var sum = 0;
  for (let i = 1; i < target; i++) {
    if (i % a == 0 || i % b == 0) {
       sum += i;
    }
  }
  return sum;
}

multiplesOf(3, 5, 1000)
