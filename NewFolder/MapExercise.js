//Your task is to iterate over this array using the map method and return a new array with new properties fullName and membershipStatus, where fullName is a combination of firstName and lastName, and membershipStatus is Premium if the user's points are more than 100, and Standard otherwise. Print the new array.

const users = [
  //our user data or info etc....
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];
const newUsers = users.map(function (user) {
  //our map function 
  return {
    //we use return to create new object
    fullName: `${user.firstName} ${user.lastName}`, // instructing ${} to concatenate first and last name
    membershipStatus: user.points > 100 ? "Premium" : "Standard", //here the ternary operator(?) to check points and assign status
  };
});
console.log(newUsers); //printing new array to console, which suppose to contain fullName and membershipStatus for each user

//console printed
//(3) [{…}, {…}, {…}]
//0
//:
//{fullName: 'Alice Johnson', membershipStatus: 'Premium'}
//1
//:
//{fullName: 'Bob Smith', membershipStatus: 'Standard'}
//2
//:
//{fullName: 'Charlie Brown', membershipStatus: 'Premium'}
//length:3
//[[Prototype]]: Array(0)
