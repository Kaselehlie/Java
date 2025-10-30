//given code;
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//STEP 1
guests.unshift("BRUTUS"); // unshift adds to the beginning of the array, so BRUTUS will be the first guest followed by the rest of the names.

//STEP 2
guests.push("AUGUSTUS", "LUCIA"); // push adds to the end of the array, so AUGUSTUS and LUCIA will be added after CLEOPATRA.

//STEP3
guests.indexOf("SPARTACUS") === -1 // my guess is -1 because SPARTACUS is not in the array. Solution is const spartacusIndex = guests.indexOf("SPARTACUS");
  ? console.log("SPARTACUS is not on the guest list.")
  : null;

//STEP 4
const cassiusIndex = guests.indexOf("CASSIUS");
if (cassiusIndex !== -1) {
  guests.splice(cassiusIndex, 1);
}
console.log("Updated Guest List:"); //6

//STEP 5
let guestList = [
  "Brutus",
  "Antony",
  "Cicero",
  "Cleopatra",
  "Augustus",
  "Lucia",
];
guests.slice(0, 3); //slices the array from index 0 to index 3 (not inclusive), so it will return a new array with the first three guests: ["Brutus", "Antony", "Cicero"].
console.log("Sliced Guest List:");
console.log(guestList);

//step 6
guestList = ["Brutus", "Antony", "Cicero", "Cleopatra", "Augustus", "Lucia"];
guestList.sort(); //sorts the array in alphabetical order.
console.log("Sorted Guest List:");
console.log(guestList);

const newGuestList = [
  "Antony",
  "Augustus",
  "Brutus",
  "Cicero",
  "Cleopatra",
  "Lucia",
];
guestListToMoveIndex = 2; // index of "Brutus"
const [guestToMove] = guestList.splice(guestListToMoveIndex, 1); // removes "Brutus" from the array.
guestList.unshift(guestToMove); // adds "Brutus" back to the beginning of the array.
console.log("Guest List with 'Brutus' Moved to Front:");
console.log(guestList);
// The final guestList will have "Brutus" at the front, followed by the other guests in alphabetical order.

//QUESTION 1: "How can you verify that "BRUTUS" was added to the beginning of the array?"
//ANSWER: You can verify that "BRUTUS" was added to the beginning of the array by checking the first element of the array using guests[0] or by using the indexOf method to find the index of "BRUTUS" and confirming that it is 0.

//QUESTION 2: "What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?" negative one (-1)
//ANSWER: The value of spartacusIndex would be -1 because the indexOf method returns -1 when the specified element is not found in the array.
