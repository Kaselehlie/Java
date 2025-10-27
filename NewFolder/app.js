// given code
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//step 1 (what i did)

//let location = "";
//if (emblemClue1 === "Eagle") {console.log ("Forum")}
//else if (emblemClue1 === "Lion") {console.log ("Colosseum")}
//else {console.log ("Villa")}

//step 1 (solution)

let locationStart = "";

if (emblemClue1 === "Eagle") {
  locationStart = "Forum";
} else if (emblemClue1 === "Lion") {
  locationStart = "Colosseum";
} else {
  locationStart = "Villa";
}

//step 2 (what i did)

//if (emblemClue2 === "Laurel" && location === "Forum") {console.log ("Garden")}

//else if (emblemClue2 === "Grapes" || location=== "Villa") {console.log ("of Pompey")}

//step 2 (solution)

if (emblemClue2 === "Laurel" && locationStart === "Forum") {
  locationStart += " of Augustus";
} else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
  locationStart += " of Pompey";
}

//step 3 (what i did)

//if (emblemClue3 ===7) {console.log ("North") }
//else if (emblemClue3 <= 3) {console.log ("South")}
//else if (emblemClue3 > 8) {console.log ("East")}
//else if (emblemClue3 == 4) {console.log ("West")}

//step 3 (solution)

switch (emblemClue3) {
  case 7:
    locationStart += "North";
    break;
  case 3:
    locationStart += "South";
    break;
  case 9:
    locationStart += "East";
    break;
  case 4:
    locationStart += "West";
    break;
}

//Answer to Question 1; It is important to be careful when using the double equals vs the triple equals because the double equals checks for value only while the triple equals checks for both value and type. This can lead to unexpected results if the types do not match.
