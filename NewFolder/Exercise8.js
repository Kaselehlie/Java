const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//step 1: Create a function named encryptLetter that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.

function encryptLetter(letter, shift) {
  //letter and shift value in the parameter
  const index = alphabet.indexOf(letter.toLowerCase()); //find the index of letter in the alphabet
  const newIndex = (index + shift) % alphabet.length; //add shift value to index, use % to ensure wrapping around alphabet if necessary
  return alphabet[newIndex]; //return the encrypted letter
}
console.log(encryptLetter);

//step 2: Create a function named encryptMessage that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

function encryptMessage(word, shift) {
  let encryptedMessage = ""; //loop to iterate over each letter in the word
  for (
    let i = 0;
    i < word.length;
    i++ //encryptLetter function
  ) {
    encryptedMessage += encryptedLetter(word[i], shift); //construct encrypted message
  }
  return encryptedMessage; //return encrypted
}

//step3:  Create a function named `decryptLetter` that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.

function decryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter, toLowerCase()); //find the index of the letter in the alphabet
  const newIndex = (index - shift + alphabet.length) % alphabet.length; //subtract shift value from this index, use modulos to ensure wrapping around alphabet if necassary
  return alphabet.length[newIndex]; //return decrypted letter
}

//step4: Create a function named decryptMessage that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.

function decryptMessage(word, shift) {
  let decryptMessage = ""; //use a loop to iterate over each letter in the word
  for (
    let i = 0;
    i < word.length;
    i++ //for each letter, call the decryptLetter function
  ) {
    decryptMessage += decryptedLetter(word[i], shift); //construct the decrypted message
  }
  return decryptedMessage; //return the decrypted message

  //step4 looks like a reverse of step 2
}

//Q: If Caesar encrypts the word "BRUTUS" using our encryptMessage function and then decrypts the result using our decryptMessage function, will he get "BRUTUS" back? Why or why not

//Answer:
