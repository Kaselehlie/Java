// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const form = document.getElementById("search-form"); //form element to handle the search functionality
const input = document.getElementById("search-input"); //to get the search input value

const resultsContainer = document.createElement("div"); //to create a container for the search results
document.body.appendChild(resultsContainer); //to append the results container to the body of the document

//------to SEARCH FOR GIFS when the search button is clicked-------//
form.addEventListener("submit", async function (event) {
  //to handle the form submission when the search button is clicked
  event.preventDefault(); //to prevent the default form submission behavior
  const query = input.value; //to get the search input value and store it in a variable called query
  console.log("query", query);
  const response = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
    //to make a GET request to the Giphy API's search endpoint with the search query and API key as parameters
    params: {
      api_key: giphyApiKey,
      q: query,
      limit: 10,
    },
  });
  appendGifs(response.data.data); //to append the search results to the results container
  input.value = ""; //to clear the search input after the search is performed
  deleteButton.removeAttribute("disabled"); //to enable the delete button after search results are displayed
  console.log(response.data.data);
});

//--------to display the search results in the container-------//
function displayGifs(gifs) {
  //to display the SEARCH RESULTS in the container
  resultsContainer.innerHTML = ""; //to clear previous search results
  resultsContainer.id = "gif-container"; //to set the id of the results container for styling purposes
  gifs.forEach((gif) => {
    //to loop through the array of gifs and create an image element for each gif, then append it to the results container
    const img = document.createElement("img"); //to create an image element for each gif
    img.src = gif.images.fixed_height.url; //set the source of the image to the gif URL
    resultsContainer.appendChild(img); //to append the image to the results container
  });
  console.log(resultsContainer); //to log the results container to the console for debugging purposes
}

//---to delete ALL gifs result typed in search box, when the delete button is clicked--------------------------------------//
const deleteButton = document.getElementById("delete-gifs"); //to get the delete button element
deleteButton.setAttribute("disabled", true); //to disable the delete button by default until there are gifs to delete
deleteButton.addEventListener("click", function () {
  resultsContainer.innerHTML = ""; //to clear the results container when the delete button is clicked
  deleteButton.setAttribute("disabled", true);
});
//--------------------------------------------------------------------------------------
//RANDOM GIF SEARCH
function appendGifs(gifs) {
  //to append the gifs to the results container without delete buttons (used for the random gif search)
  gifs.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    resultsContainer.appendChild(img);
  });
}
//-----------------------------------------------------------

function appendGifs(gifs) {
  //to append the gifs to the results container with delete buttons for each gif (used for the search results)
  gifs.forEach((gif) => {
    const gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container"); //styled with CSS to position the delete button on top of the gif

    const img = document.createElement("img"); //set the source of the image to the gif URL
    img.src = gif.images.fixed_height.url;

    const deleteBtn = document.createElement("button"); //to create a delete button for each gif
    deleteBtn.textContent = "X"; //to set the text content of the delete button to "X"
    deleteBtn.classList.add("delete-btn");
    //an event listener to the delete button to remove the gif container when clicked
    deleteBtn.addEventListener("click", function () {
      resultsContainer.removeChild(gifContainer);
    });

    gifContainer.appendChild(img);
    gifContainer.appendChild(deleteBtn);
    resultsContainer.appendChild(gifContainer);
  });
}

//-----------------------------------------------------

//-----to SEARCH for RANDOM GIFS when the random button is clicked-----//
const randomForm = document.getElementById("random-form"); //to get the random form element
randomForm.addEventListener("submit", async function (event) {
  //to handle the form submission when the random button is clicked
  event.preventDefault();
  const response = await axios.get(`http://api.giphy.com/v1/gifs/random`, {
    //to make a GET request to the Giphy API's random endpoint with the API key as a parameter
    params: {
      api_key: giphyApiKey,
    },
  });
  appendGifs([response.data.data]);
  console.log(response.data.data);
});
//----------------------------------

//----to DELETE ALL RANDOM GIFS when the button is clicked--------//
const deleteRandomButton = document.getElementById("delete-random-gifs"); //to get the delete random button element
deleteRandomButton.addEventListener("click", function () {
  //
  resultsContainer.innerHTML = ""; //to clear the results container when the delete random button is clicked
});

//-----------------------------------------------------
