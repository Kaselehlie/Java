// 1. The `script.js` is included in the head of the `index.html`. To run your code after the DOM is loaded, wrap it with a callback function of an event listener (`DOMContentLoaded`).
document.addEventListener("DOMContentLoaded", function () {
  // 2. Get the elements from the DOM that you will work on (box container, new box button, color form, color input).

  const boxContainer = document.getElementById("box-container");
  const newBoxButton = document.getElementById("new-box-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  // 3. Create variables to store the box color and counter for the box ID.
  let boxColor = "#000000"; // Default color
  let boxCounter = 1;

  // 4. When the form is submitted, get the value from the color input element from Step 2 and set this color to all boxes (to get all boxes, use the class name `box`). Remember to reset the color input element's value and store the color in the box color variable we created in Step 3.
  colorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    boxColor = colorInput.value;
    const boxes = document.getElementsByClassName("box");
    for (let box of boxes) {
      box.style.backgroundColor = boxColor;
    }
    colorInput.value = "";
  });

  // 5. Create a function that adds a new box. In this function, set the box ID as content, the class name, and the background color from the box color variable we created in Step 3. Besides, set the box ID to a data attribute. You'll need this attribute to set the display text back to ID when the mouse leaves. Since we used this counter ID, increment it using the counter variable we created in Step 3 to keep its uniqueness.
  function addNewBox() {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = boxColor;
    box.textContent = boxCounter;
    box.setAttribute("data-box-id", boxCounter);
    boxContainer.appendChild(box);
    boxCounter++;
  }

  // 6. When the new box button is clicked, call the function that we created above that adds a new box.
  newBoxButton.addEventListener("click", addNewBox);

  // 7. To remove a box, listen to the double-click events in the document. If the event's target's class list contains the value `box`, remove the element.
  document.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("box")) {
      event.target.remove();
    }
  });

  // 8. To display a box's page coordinates, listen to the mouse over events in the document. If the event's target's class list contains the value `box`, display the coordinates.
  document.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("box")) {
      const rect = event.target.getBoundingClientRect();
      console.log(`Box coordinates: ${rect.left}, ${rect.top}`);
    }
  });

  // 9. To display a box's ID back when the mouse leaves after displaying the box's page coordinates, listen to the mouse out events in the document. If the event's target's class list contains the value `box`, get the ID from the box's data attributes and display it.
  document.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("box")) {
      const boxId = event.target.getAttribute("data-box-id");
      event.target.textContent = boxId;
    }
  });

  // 10. To create a new box when the `N` key is pressed, listen to the key-down events in the document. If the key is `N` (check both upper and lower cases), call the function that adds a new box. Remember to ignore the event if it is triggered from the color input element.
  document.addEventListener("keydown", function (event) {
    if (
      (event.key === "n" || event.key === "N") &&
      !event.target.matches("#color-input")
    ) {
      addNewBox();
    }
  });
});

// End of DOMContentLoaded event listener
