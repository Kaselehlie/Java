function greet() {
  console.log("hi Ilove You"); // we are declaring our function name and telling console.log to print it as "hi Ilove you"
}
function diss() {
  // can be more than one but with different names
  console.log("you suck");
}

function repeatThreeTimes(func) {
  //so we are instructing to repeat 3 times
  func();
  func();
  func();
}

function repeat(num, func) {
  //we are combining the actions up there to this function we created
  for (let i = 0; i < num; i++) {
    // by using the loop method
    func(); // go to the console and type: repeat (5, diss) and it will print "you suck" 5x
  }
}

//in reference to "FIRST CLASS FUNCTIONS", this is an example of function acting as arguments to other functions, which is really common in js

//STORING A FUNCTION IN AN ARRAY
function greet() {
  console.log("hi Ilove You");
}
function diss() {
  console.log("you suck");
}

function doubleDiss(){
diss();
diss();
}

let funcs = [greet, diss]; //  we making/storing the functions we created to an ARRAY. run it in the console as funcs and it will show 2 elements (both are functions)
//to access it, type in the console; funcs [0] (notice the square brackets enclosing the 0), add the parenthesis or (), and it will hold/run that value; its like saying "gimme that element in that array"
//so basically to retrieve, store and execute a command in this scenario, you need to add the parenthesis or it will not work...and also important to use the right method or bracket and symbols etc...

//FUNCTION STORED IN A VARIABLE
const myFunc = function add(x, y) {
  // making our variable (const myFunc), set an equal(=) to a function (function add (x,y))..
  return x + y; //which returns x,y
}; // run myFunc(3,4) in de console and it should print 7
//so now we can use our variable "myFunc" instead of writing out the equation or defining our function

//RETURN VALUE OF A FUNCTION CAN BE ANOTHER FUNCTION
function giveBirth() {
  console.log("GIVING BIRTH!!"); //console.log after declaring our function?
  return function cry() {
    return "waaaaaahhhh";
  };
} ///Question for mentor: why when I call ( or type giveBirth) and execute in the console, it shows everything that I typed in vs code, even the commands....exactly as above
//update: nvm I forgot to add the () in de console after typing giveBirth
//
//when I used 2 of the parenthesis ()(), console printed "waaaahhhh", but when I used just one () it included the element f cry() {
//return "waaahhh";};}
//
//also remember we can return a value within a function
//For example: to capture the above to a variable; in de comsole type const func= giveBirth() run it, type func, run it, type func() and run it. or just type giveBirth()(). Yay we are getting it!
//..............ANOTHER EXAMPLE.........................
function makeMultiplyFunc(num) {//this function returns another function and accepts a number argument (n)
  return function multi(x) {//f
    return num * x;//so we can make another function in the console doing the operation like; multiFunction=quad, then run quad(9) will print 36, or make another function name like multiFunction=double, run it, then double(3) will print 6.
  };
}
//...............TIP........THREADING IN JS..............................
//since js is a single threaded language. To go around this, do example below
//greet();
//alert("I AM ALERT!")
//diss()
//putting alert will print only the greet part and a pop will appear on the browser, tho will not print the diss(), until you click on the alert prompt pop up.
//;;;;;;;;;;;;;;;;;;

//..........................SETTING TIMERS...........
//greet();
//wait5seconds();...this is where you put setTimeOut(and the time you want it to delay in here)
//diss();
//greet();
setTimeOut(diss, delay);//we can set a pause per milisecond like so
setTimeout(diss, 3000);//setTimeOut is a build-in function in js so we dont have to call it in order to define it
greet();
setTimeout(function(){
    diss();
    diss();
    diss();
},1000);
setTimeout(diss, 1000);//this takes 1 second
greet();


//......to do setInterval..........
const id=setInterval (diss, 2000);// this will repeatedly call diss every 2 sec and wont stop till you comment it out, clear the intervalId--->(clearInterval()) <--- or close the window.........

//..visualizing setTimeOut..//tool called 'loupe' created by phillip....
//call stack; visualizes what is being done behind the scene (runs greet, diss)
//web Apis: call it the browser, so jv hands over things such as timers or whatever to this (this handles setTimeOut)
//Callback Queue: part where web Apis pass on finished operations and call stack retrieves finished operations it cannot handle

//....ANONYMOUS FUNCTION.........//..
//setTimeout(function(){
    //console.log ("MEOW");
    //console.log ("woof");
    //console.log ("OINK");
//}, 3000);

//function doTwice(func){
    //func();
    //func();
//}

//doTwice(function()
//{
    //console.log("stop bothering me");
    //console.log("pls go away");
//})/// ---->so tired right now lol<--------------

//annonymous function does not have a name of its own

//const printOne =function(){
    //console.log(1)
//}
//can use an annonymous function and save it to a variable

// can pass annonymous function as an argument to another function