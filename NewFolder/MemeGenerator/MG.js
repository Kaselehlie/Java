document.addEventListener("DOMContentLoaded", function () {
  // to ensure the DOM is fully loaded
  const memeForm = document.getElementById("meme-form"); // Get the meme form element
  const memeContainer = document.getElementById("meme-container"); // Get the container to hold memes

  memeForm.addEventListener("submit", function (event) {
    // Handle form submission
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const topText = document.getElementById("top-text").value;
    const bottomText = document.getElementById("bottom-text").value;
    const imageUrl = document.getElementById("image-url").value;

    // Create meme elements
    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme"); // Create meme container div

    const img = document.createElement("img"); // Create image element
    img.src = imageUrl; // where the image comes from
    img.alt = "Meme Image"; // where the alt text comes from

    const topTextDiv = document.createElement("div"); // Create top text div
    topTextDiv.classList.add("top-text");
    topTextDiv.innerText = topText;

    const bottomTextDiv = document.createElement("div"); // Create bottom text div
    bottomTextDiv.classList.add("bottom-text");
    bottomTextDiv.innerText = bottomText;

    const deleteButton = document.createElement("button"); // Create delete button
    deleteButton.innerText = "Delete Meme";
    deleteButton.addEventListener("click", function () {
      memeContainer.removeChild(memeDiv);
    });

    // Append elements to memeDiv
    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteButton);

    // Append memeDiv to memeContainer
    memeContainer.appendChild(memeDiv);

    // Clear form fields
    memeForm.reset();
  });
});
