function factorial(num){
  if(num ===1 ){
    return 1;
  }
  return num * factorial(num-1);
}
console.log(factorial(4)); //24

//Recursive: 1. Base case, 2. Different input