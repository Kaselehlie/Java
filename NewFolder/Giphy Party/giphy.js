// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

const resultsContainer = document.createElement("div");
resultsContainer.id = "gif-container";
document.body.appendChild(resultsContainer);

async function giphyRequest() {
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`,
  );
  console.log(response);
}
giphyRequest();

function displayGifs(gifs) {
  resultsContainer.innerHTML = "";
  gifs.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    resultsContainer.appendChild(img);
  });
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const query = input.value;
  const response = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
    params: {
      api_key: giphyApiKey,
      q: query,
      limit: 5,
    },
  });
  displayGifs(response.data.data);
});

const deleteButton = document.getElementById("delete-gifs");
deleteButton.addEventListener("click", function () {
  resultsContainer.innerHTML = "";
  deleteButtonDiv.appendChild(deleteButton);
});

// clearInterval.apply()
