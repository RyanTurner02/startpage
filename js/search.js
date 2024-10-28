const BRAVE_SEARCH_URL = "https://search.brave.com/search?q=";

const searchTextField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", searchButtonClicked);

// check if the "Enter" key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        searchButtonClicked();
    }
});

function searchButtonClicked() {
    const searchString = searchTextField.value;

    if (searchString.length == 0) {
        return;
    }

    const URL = BRAVE_SEARCH_URL + searchString;
    window.location.href = URL;
}
