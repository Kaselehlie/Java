/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

function trackAnimalSightings(...animals) {
  // rest parameter to accept multiple animal names
  console.log(`Animal Sightings: ${animals}`);
}
trackAnimalSightings("Elephant", "Lion", "Giraffe", "Rhino");

//.......................................................................................................................

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const allHabitats = [...forestHabitats, ...savannahHabitats]; // combining both arrays using spread operator
console.log("All Habitats:", allHabitats);

//.................................................................................................................................................

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const rhinoStatus2 = { ...rhinoStatus, habitat: "Savannah" }; // new info 'habitat'
rhinoStatus2.population = 550; // Updating existing property 'population' to reflect increase
console.log("Updated Rhino Status:", rhinoStatus2);

//.................................................................................................................................................

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// // TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const lionGeneticProfile = { ...lionProfile, genetics: "Diverse" };
console.log("Original Lion Profile:", lionProfile);
console.log("Copied Lion Profile with Genetics:", lionGeneticProfile);

/*
 * Observations: The original lion profile did not change when I input the 'genetics' property to the copied object.

 * Explain here.--->  the spread operator (...) creates a shallow copy of the original object. Which means that the top-level properties are copied to a new object. Since 'genetics' is a new property added to the copied object, it does not affect the original object. Therefore, changes made to the copied object do not impact the original object in this case.
 *
//..................................................................................................................................................

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

const ecosystemHealthCopy = { ...ecosystemHealth };
ecosystemHealthCopy.foodSupply.carnivores = "Scarce";
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Copied Ecosystem Health:", ecosystemHealthCopy);

//  * Observations: Modifying nested property in the copied object; 'Sufficient' is now 'Scarce' in both

//  * TODO: Explain here.---> Both objects share the same nested object reference. Therefore, changes to nested properties in the copied object impact the original object as well.

//..................................................................................................................................................
