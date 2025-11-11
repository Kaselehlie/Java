
//FizzBuzz section

function fizzBuzz()//write a function 'fizzBuzz' 
  {
  if (typeof number !== "string") console.error("Error");
  return;//print error if unexpected happen and stop execution
}
{
  for (let int = 0; int < 100; int++) //given a positive integer number less than 100
  {
    if (int % 3 === 0) console.log("Fizz");//print fizz if # divisible by 3
    else if (int % 5 === 0) console.log("Buzz");//print buzz if # is divisible by 5
    if (int % 3 === 0 && int % 5 === 0) console.log("FizzBuzz");//print fizzbuzz if # is divisible by both 3 and 5
    else if (int % 3 !== 0 && int % 5 !== 0) console.log(int);
  }//print the number if not divisible by 3 and 5
}


//Letter Count Section

function letterCount(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; //string 'word' consisiting of alphabetical characters

  if (typeof word !== "string") {
    console.error("Error");
    return;
  }

  for (const letter of word) {
    if (!alphabet.includes(letter.toLowerCase())) {
      console.error("Error");
      return;
    }
  }

  let letterCounts = {};

  for (let letter of word) {
    let lowerCaseLetter = letter.toLowerCase();

    if (letterCounts[lowerCaseLetter] !== undefined) {
      letterCounts[lowerCaseLetter]++;
    } else {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}

//letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));
