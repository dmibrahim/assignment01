let fib = (number )=>{
    if(number <=0){
        return 1;
    }
   else 
      return fib(number-1)+fib(number-2);
}
console.log('2: Displaying fibonacci of 45: '+fib(45));
