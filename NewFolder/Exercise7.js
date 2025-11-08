const friend = "BRUTUS";
const shiftValue = 3;

//Step 1: Recall the Latin alphabet variable from the previous exercise.
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 2: Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.
let encryptedName = "";
for (let i = 0; i < friend.length; i++) {
  const letter = friend[i].toLowerCase();
  const index = alphabet.indexOf(letter);
  if (index !== -1) {
    const shiftedIndex = (index + shiftValue) % alphabet.length;
    encryptedName += alphabet[shiftedIndex].toUpperCase();
  } else {
    encryptedName += letter; // Non-alphabetic characters remain unchanged
  }
}
console.log("Encrypted Name:", encryptedName); // Output the encrypted name
// The encrypted name for "BRUTUS" with a shift of 3 is "EUXWXV"


//Question 1: What advantage does using a loop provide over manually encrypting each letter?

//Answer 1: Using a loop allows for scalability and efficiency. It enables the encryption of names of any length without needing to write repetitive code for each letter.

//Question 2: Explain the role of `% alphabet.length` in our loop. How does it aid in the encryption process?

// Answer 2: The `% alphabet.length` operation ensures that when the shifted index exceeds the length of the alphabet, it wraps around to the beginning. This is crucial for maintaining the cyclic nature of the Caesar Cipher, allowing letters at the end of the alphabet to correctly map back to the start.
