const BRAVE_Search_URL = "https://search.brave.com/search?q=";

let searchTextField = document.getElementById("search-field");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", searchButtonClicked);

// check if the "Enter" key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        searchButtonClicked();
    }
});

function searchButtonClicked() {
    let searchString = searchTextField.value;

    if (searchString.length == 0) {
        return;
    }

    let URL = BRAVE_Search_URL + searchString;
    window.location.href = URL;
}
