// Initialize the array of fortunes
let fortunes = [];

function load() {
    const url = "../json/fortunes.json";       // Define the URL of the JSON file

    fetch(url)                                       // Fetch the JSON file using the fetch function
        .then(response => response.json()) // Convert the response to a JSON object
        .then(data => {
            fortunes = data.fortunes;               // Store the array of fortunes in the fortunes variable
            console.log(data.fortunes);             // Log the array of fortunes to the console
        })
        .catch(error => console.error(error));      // Log any errors to the console
}

function roll() {
    const index = Math.floor(Math.random() * fortunes.length);
    console.log("Rolled " + index + ": " + fortunes[index]["title"]);
    return fortunes[index];
}

function add(a, b){
    return a + b;
}

// When the page loads, call the load function
window.onload = load;

window.addEventListener("DOMContentLoaded", () => {

    // When the button is clicked, call the roll function
    document.querySelector(".fortune-button").addEventListener("click", function(event) {
        event.preventDefault();
        // Roll for the fortune
        const fortune = roll();

        document.querySelector(".fortune-description").innerHTML = fortune.description;
        document.querySelector(".fortune-title").innerHTML = fortune.title;
        document.querySelector(".fortune-effects").innerHTML =
            "<br>Effects: <br>" +
            "Rest: " + fortune["effects"]["rest"] + "<br>" +
            "Happiness: " + fortune["effects"]["happiness"] + "<br>" +
            "<br>Skills: <br>" +
            "   Test Taking: " + fortune["effects"]["skills"]["test_taking"] + "<br>" +
            "   Coding: " + fortune["effects"]["skills"]["coding"] + "<br>" +
            "   Thinking: " + fortune["effects"]["skills"]["thinking"] + "<br>";

    });
});

module.exports = {load, roll, add};