const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Source - https://stackoverflow.com/q/77951897
// Posted by Owen Miller
// Retrieved 2025-11-16, License - CC BY-SA 4.0

function encrypt(message, shiftValue) {
  let encryptedMessage = ""; // somewhere for the message to be stored
  for (i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); // each character made lowercase

    if (alphabet.includes(char)) {
      // if alphabet includes the character
      const idx = alphabet.indexOf(char); // find its index
      const newIdx = (idx + shiftValue) % alphabet.length; // then add the shift value to it     while going through the alphabet
      encryptedMessage += alphabet[newIdx]; // add/store it as the message

      if ((i + 1) % 2 === 0) {
        const randomIndex = Math.floor(Math.random() * 26);
        encryptedMessage += alphabet[randomIndex]; // every two character a random letter is     added
      }
    } else {
      encryptedMessage += char; //Characters outside the alphabet are passed through unchanged
    }
  }

  return encryptedMessage;
}

//console log printed changes results every 2 letters, a random letter is added
console.log(
  encrypt(
    "Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!",
    42
  )
);

// Source - https://stackoverflow.com/a/77951927
// Posted by Iłya Bursov
// Retrieved 2025-11-16, License - CC BY-SA 4.0

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (i = 0; i < encryptedMessage.length; i++) {
    if ((i + 1) % 3 != 0) {
      // ignore random insertions
      const char = encryptedMessage[i].toLowerCase();
      const idx = alphabet.indexOf(char);
      if (idx >= 0) {
        let newIdx = idx - shiftValue;
        while (newIdx < 0) newIdx += alphabet.length; // here is how you avoid negative indexes
        decryptedMessage += alphabet[newIdx % alphabet.length];
      } else {
        decryptedMessage += char;
      }
    }
  }
  // Your decryption code here
  return decryptedMessage;
}

//secret message + 42 as shift value
console.log(
  decrypt(
    "Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!",
    42
  )
);
//console printed: "seek the midnight shadow of romulus and remus. there, whisper the word 'aurelius' to the winds. and by being able to get to this message, you have completed the quest!"
