//------------->PROJECT 2 redo finalized, using original message, shift value) <-----------------------------------

const alphabet = "abcdefghijklmnopqrstuvwxyz"; //defining the alphabet to be used for encryption and decryption

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
      counter = 0; //then reset counter to 0
    }
    if (index === -1) {
      //checking if the character is not found in the alphabet (like spaces or punctuation)
      encryptedMessage += message[i]; //if not found, add the character as is to the encrypted message
    } else {
      //if the character is found in the alphabet
      let newIndex = (index + shiftValue) % alphabet.length; //calculate the new index by shifting the original index by the shift value, wrapping around using modulo
      if (message[i] === message[i].toUpperCase()) {
        //checking if the original character was uppercase
        encryptedMessage += alphabet[newIndex].toUpperCase(); //adding the new letter in uppercase to the encrypted message
      } //if the original character was lowercase
      else {
        if (newIndex < 0) {
          //if new index is negative
          newIndex = alphabet.length + newIndex; //handle negative index by wrapping around
        } else {
          encryptedMessage += alphabet[newIndex]; //add the new letter in lowercase to the encrypted message
        }
      }
    }
    counter++; //incrementing the counter after processing each letter//** */ like iteration in loop moves pointer to next character
  }
  return encryptedMessage; //returning the final encrypted message
}
function generateRandomLetter() {
  //function to generate a random letter from the alphabet
  const randomIndex = Math.floor(Math.random() * alphabet.length); //generating a random index within the range of the alphabet length
  return alphabet[randomIndex]; //returning the letter at the random index
}
console.log(
  encrypt(
    "Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!",
    42
  )
); //console.log printed the encrypted message, also every 2 letters a random letter is added

//..........<-----------decrypt------------------->
function decrypt(message, shiftValue) {
  //function to decrypt the message
  let decryptedMessage = ""; //initializing an empty string to hold the decrypted message
  let counter = 0; //initializing a counter to keep track of letters processed
  for (let i = 0; i < message.length; i++) {
    //looping through each character in the message
    const index = alphabet.indexOf(message[i].toLowerCase()); //finding the index of each letter in the alphabet to lowercase
    if (counter === 2) {
      //checking if the counter has reached 2
      counter = 0;
      continue; // Skip the random letter
    }
    if (index === -1) {
      //checking if the character is not found in the alphabet
      decryptedMessage += message[i]; //if not found, add the character as is to the decrypted message
    } else {
      let newIndex = (index - shiftValue) % alphabet.length; //calculating the new index by shifting the original index back by the shift value

      if (newIndex < 0) {
        //if new index is negative
        //handle negative index by wrapping around
        newIndex = alphabet.length + newIndex; //adjusting the new index if it's negative
      }
      decryptedMessage += alphabet[newIndex]; //adding the new letter to the decrypted message
    }
    counter++; //incrementing the counter after processing each letter
  }
  return decryptedMessage; //returning the final decrypted message
}
console.log(
  decrypt(
    "Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!",
    42
  )
);
//console printed seek the midnight shadow of romulus and remus. there, whisper the word 'aurelius' to the winds. and by being able to get to this message, you have completed the quest!

//<-----------to my mentor; I tried to test encrypt and decrypt together, did not work------------------->
//console.log(decrypt(encrypt("Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!", 42), 42));

//reference: Modified operation/task (- comments) by my Mentor Mr.Taofeek Adesina, SpringBoard; retrieved via zoom messages on 11/19/2025;
