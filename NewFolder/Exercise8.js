function fizzBuzz(int) {console.log (num);}
{
  for (let int = 1; int < 100; int++) {
    if (int % 3 === 0) console.log("Fizz");
    else if (int % 5 === 0) console.log("Buzz");
    if (int % 3 === 0 && int % 5 === 0) console.log("FizzBuzz");
    else if (int % 3 !== 0 && int % 5 !== 0) console.log(int);
    
   if (int >= 100) 
    console.log("error");
  }}



//You are given a positive integer number `n`, where it is less than 100 (excluded).

//For every number up to `n` (included):
//- Print `Fizz` if the number is divisible by `3`.
//- Print `Buzz` if the number is divisible by `5`.
//- Print `FizzBuzz` if the number is divisible by both `3` and `5`.
//- Print the number if it is not divisible by `3` or `5`.
//Print `Error` if unexpected happens and stop the execution.

//Write a function `fizzBuzz` using JavaScript that solves the above problem and satisfies the conditions.
