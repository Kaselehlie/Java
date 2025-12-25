document.addEventListener("DOMContentLoaded", function () {
  solveTask1();
  solveTask2();
  solveTask3();
  solveTask4();
  solveTask5();
  solveTask6();
  solveTask7();
  solveTask8();
  solveTask9();
});

function solveTask1() {
  document.getElementById("task1").innerText = "Changed with 'innerText'.";
}

function solveTask2() {
  document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

function solveTask3() {
  document.body.style.backgroundColor = "#232323";
}

//......................haha this is how I tried to solve task 4.........lol..................
// function solveTask4 ()
// {document.querySelectorAll.class= border: 5px;}
//............................................................................................

function solveTask4() {
  document.querySelectorAll(".item").forEach((item) => {
    item.style.border = "2px solid black";
  });
}

function solveTask5() {
  document.getElementById("task5").href = "https://www.springboard.com/";
}

function solveTask6() {
  document.getElementById("task6").value = "DOM Master";
}

function solveTask7() {
  // {document.getElementByClassList('task7').input= "new-class"}//--->an attempt failed

  // {document.querySelector('classList').input= add "new-class"}//--->yup another fail
  //{document.classList.add= "new-class";}--->and another attempt failed
  document.getElementById("task7").classList.add("new-class");
} //---> i gave up and looked at solutions

function solveTask8() {
  // {document.createElement("task8").append= input, "<button>Submit</button>";}--->grrrrr!
  //{document.createELement ('task8').input= "<button>Submit</button>";}------>couldnt figure it out
  const newButton = document.createElement("button");
  newButton.innerText = "New Button";
  document.getElementById("task8").appendChild(newButton); // via solutions springboard
}

function solveTask9() {
  document.getElementById("task9").remove("task9");
} // wow I did this part myself! :-)
