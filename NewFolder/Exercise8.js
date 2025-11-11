function fizzBuzz(int) {
  console.log(num);
}
{
  for (let int = 1; int < 100; int++) {
    if (int % 3 === 0) console.log("Fizz");
    else if (int % 5 === 0) console.log("Buzz");
    if (int % 3 === 0 && int % 5 === 0) console.log("FizzBuzz");
    else if (int % 3 !== 0 && int % 5 !== 0) console.log(int);

    if (!int > 100) console.log("error");
  }
}
