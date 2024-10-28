const BRAVE_SEARCH_URL = "https://search.brave.com/search?q=";

const searchTextField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", searchButtonClicked);

searchTextField.addEventListener("keydown", (event) => {
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
