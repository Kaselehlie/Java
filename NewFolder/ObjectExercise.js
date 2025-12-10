/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

const participant = {
  name: "Ion",
  age: 28,
  studyField: "Coding",
};
console.log(participant);
//.............................................................................................................................

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantCopy = {
  ...participant,
  displayInfo() {
    console.log(
      `Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  },
};

participantCopy.displayInfo();
//............................................................................................................................................
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantCopy2 = {
  ...participant,
  displayInfo: () => {
    console.log(
      `Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  },
};

/*
 * Observations: I tried to run 'this' in the console and it returned ' '. I think it's because arrow functions don't have their own 'this' context, they use the 'this' from the parent scope.
 * TODO: Explain here-------->In this case, `this` is the global object (window in browsers), which does not have the properties `name`, `age`, and `studyField`.
 */

participantCopy2.displayInfo();
//.............................................................................................................................

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(obj, propertyName, value) {
  const newObj = { ...obj, [propertyName]: value };
  return newObj;
}

const updatedParticipant = updateParticipantInfo(
  participant,
  "studyField",
  "Web Development"
);
console.log(updatedParticipant);
