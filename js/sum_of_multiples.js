function sumOfMultiples() {
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
}
sumOfMultiples();