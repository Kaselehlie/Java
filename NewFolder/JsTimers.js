//----->STEP 1<--------.................Declare the task arrays and monitoring interval ID variable

let oneTimeTasks = []; //a square bracket is used to define an array in js. here we are making an empty array to store one-time tasks
let monitoringTaskId; //here let is used becuzz the id will likely be reassigned when the intervals are started or cleared

//----->STEP 2<--------.................
//write a function name 'addOneTimeTask' that accepts a function and a delay as parameters.This function should add an object containing both parameters into the 'oneTimeTask' array
function addOneTimeTask(func, delay) {
  oneTimeTasks.push({ function: func, delay: delay }); //pushing an object into the oneTimeTasks array, the object contains 2 properties; function and delay. The .push method is kind of a shortcut aint it?
}

//----->STEP 3<--------...................
//**Run One-Time Tasks Function**:
function runOneTimeTasks() {
  for (const oneTimeTask of oneTimeTasks) {
    setTimeout(oneTimeTask.function, oneTimeTask.delay);
  } //for loop to iterate over each oneTimeTask in the oneTimeTasks array, and for each task, it uses setTimeout to schedule the execution of the function after the specified delay
}
//----->STEP 4<--------...................
//start monitoring function
//write a function named 'startMonitoring' function that uses 'setInterval to simulate continous monitoring, this function should print a message every few seconds and store Interval ID in the 'monitoringTaskId'
function startMonitoring() {
  console.log("Starting continuous monitoring of space station parameters...");

  monitoringTaskId = setInterval(function () {
    console.log("Monitoring space station conditions...");

    /* Condition checks. */
    const oxygenLevel = Math.random() * 100; // Mock-up oxygen level percentage.
    const powerStatus = Math.random() > 0.1 ? "Stable" : "Critical"; // Mock-up power status.
    const communicationCheck =
      Math.random() > 0.05 ? "All systems go" : "Communication error"; // Mock-up communication system check.
    console.log(
      `Oxygen Level: ${oxygenLevel.toFixed(
        2
      )}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`
    );
  }, 1000); // when you run startMonitoring in the console, every 3 seconds, its giving updates on oxygen level, power status and communication check
}

//----->step 5<----Stop Monitoring Function:
//Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`

function stopMonitoring() {
  clearInterval(monitoringTaskId);
  console.log("Continuous monitoring stopped.");
  //in the console, when printed stopMonitoring(), it will stop the monitoring that was started by startMonitoring()
}

//----->STEP 6<--------...................
//Countdown Function:
//Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.

function startCountdown(duration) {
  //I put 10 when I ran it in the console
  let timeLeft = duration;
  console.log(`Countdown started: ${timeLeft} seconds`);

  const countdownTimerId = setInterval(function () {
    timeLeft--;
    console.log(`T-minus ${timeLeft} seconds`);

    if (timeLeft <= 0) {
      clearInterval(countdownTimerId);
      console.log("Liftoff! The rocket has successfully launched into space!");
    }
  }, 3000);
}
//in the console, when run startCountdown(10), it started countdown from 10 to 0, printing every 3 seconds, then printed liftoff message when it reached 0

//7. **Schedule Pre-Launch Activities and Launch**: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.

function scheduleMission() {
  startMonitoring(); // Starts monitoring space station conditions.
  addOneTimeTask(function () {
    console.log("Pre-launch system check complete.");
  }, 5000);
  addOneTimeTask(stopMonitoring, 3000); // Stops monitoring before the countdown.
  addOneTimeTask(function () {
    startCountdown(10);
  }, 3000); // Starts countdown after all preparations.

  runOneTimeTasks(); // Executes all scheduled one-time tasks.
}

scheduleMission(); // Starts the mission.

//**Execute Your Script**: Run your script and watch your space
