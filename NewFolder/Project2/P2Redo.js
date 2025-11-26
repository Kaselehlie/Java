const alphabet = "abcdefghijklmnopqrstuvwxyz"; //defining the alphabet to be used for encryption and decryption

//------------>PROJECT 2 REDO<-----------------------------------
//reference: Modified operation/task or suggestion by my Mentor Mr.Taofeek Adesina, SpringBoard; retrieved via zoom messages on 11-19-2025.

function encrypt(message, shiftValue) {
  //function to encrypt the message
  let encryptedMessage = ""; //initializing an empty string to hold the encrypted message
  let counter = 0; //initializing a counter to keep track of letters processed
  for (
    let i = 0;
    i < message.length;
    i++ //looping through each character in the message
  ) {
    const index = alphabet.indexOf(message[i].toLowerCase()); //converting each letter to lowercase and finding its index in the alphabet
    if (counter === 2) {
      encryptedMessage += generateRandomLetter(); //instructing to add a random letter every 2 letters
      counter = 0; //reset counter
    }
    if (index === -1) {
      //checking if the character is not found in the alphabet (like spaces or punctuation)
      encryptedMessage += message[i]; //if not found, add the character as is to the encrypted message
    } else {
      //if the character is found in the alphabet
      let newIndex = (index + shiftValue) % alphabet.length; //calculate the new index by shifting the original index by the shift value, wrapping around using modulo
      if (message[i] === message[i].toUpperCase()) {
        //checking if the original character was uppercase
        encryptedMessage += alphabet[newIndex].toUpperCase(); //add the new letter in uppercase to the encrypted message
      } //if the original character was lowercase
      else {
        if (newIndex < 0) {
          newIndex = alphabet.length + newIndex; //handle negative index by wrapping around// not sure what this is
        } else {
          encryptedMessage += alphabet[newIndex]; //add the new letter in lowercase to the encrypted message
        }
      }
    }
    counter++; //in our situation, instructing the count one number and move on to next, process or method//
  }
  return encryptedMessage; //returning the final encrypted message
}
function generateRandomLetter() {
  //function to generate a random letter from the alphabet
  const randomIndex = Math.floor(Math.random() * alphabet.length); //generating a random index within the range of the alphabet length
  return alphabet[randomIndex]; //returning the letter at the random index
}
console.log(
  encrypt("hello, taofeek, my name is something you already know", 42) //console.log printed the encrypted message, also every 2 letters a random letter is added
);
//------>DECRYPT<------------------------
function decrypt(message, shiftValue) {
  //function to decrypt the message
  let decryptedMessage = ""; //initializing an empty string to hold the decrypted message
  let counter = 0; //initializing a counter to keep track of letters processed
  for (let i = 0; i < message.length; i++) {
    //looping through each character in the message
    const index = alphabet.indexOf(message[i].toLowerCase()); //finding the index of each letter in the alphabet to lowercase
    if (counter === 2) {
      //checking if the counter has reached 2
      counter = 0; //resets
      continue; // Skip the random letter
    }
    if (index === -1) {
      //checking if the character is not found in the alphabet
      decryptedMessage += message[i]; //if not found, add the character as is to the decrypted message
    } else {
      let newIndex = (index - shiftValue) % alphabet.length; //calculating the new index by shifting the original index back by the shift value

      if (newIndex < 0) {
        //handle negative index by wrapping around
        newIndex = alphabet.length + newIndex; //adjusting the new index if it's negative
      }
      decryptedMessage += alphabet[newIndex]; //adding the new letter to the decrypted message
    }
    counter++; //oohhk just like iteration in loop, moves the pointer to the next character
  }
  return decryptedMessage; //returning the final decrypted message
}
console.log(console.log(decrypt(encrypt("Hello, brutus is here", 42), 42)));
//console.log printed hello, brutus is here.
s
//question: why do we use both encrypt and decrypt functions together here?
//answer: we use both functions together here to demonstrate that the encryption and decryption processes are working correctly.
//By encrypting a known message and then immediately decrypting it, we can verify that the output of the decryption matches the original message.
//This serves as a test to ensure that both functions are functioning as intended.
