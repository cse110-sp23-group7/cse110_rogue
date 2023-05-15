
// Initialize the array of fortunes
let fortunes = [];

/**
 * Load the fortunes from the JSON file
 *
 * @param {string} url - The URL of the JSON file
 * @returns {boolean} - Returns true if the fortunes were loaded successfully
 */
function load(url) {

    fetch(url)                                       // Fetch the JSON file using the fetch function
        .then(response => response.json()) // Convert the response to a JSON object
        .then(data => {
            fortunes = data.fortunes;               // Store the array of fortunes in the fortunes variable
            console.log(data.fortunes);             // Log the array of fortunes to the console
            return true;                            // Return true to indicate the fortunes were loaded successfully
        })
        .catch(error => {
            console.error(error)                    // Log any errors to the console
            return false;                           // Return false to indicate the fortunes were not loaded successfully
        });
    return false;
}

/**
 * Get a random fortune from the array of fortunes. Each fortune has the following properties:
 *
 * {
 *   "title": "Title",
 *   "description": "Sample description",
 *   "effects": {
 *     "rest": <Integer>,
 *     "happiness": <Integer>
 *     "skills": {
 *       "test_taking": <Integer>,
 *       "coding": <Integer>,
 *       "thinking": <Integer>
 *      }
 *   }
 * }
 * Each integer is a value between -100 and 100 inclusive, and reflects the stat changes to the user.
 * For example, a fortune with a rest value of 10 will increase the user's rest by 10.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @returns {Object} - A random fortune object
 */
function roll() {
    const index = Math.floor(Math.random() * fortunes.length);
    console.log("Rolled " + index + ": " + fortunes[index]["title"]);
    return fortunes[index];
}

/**
 * Add two numbers together. This is a simple function to demonstrate unit testing.
 *
 * @param a First number
 * @param b Second number
 * @returns {int} The sum of the two numbers
 */
function add(a, b){
    return a + b;
}

window.addEventListener("DOMContentLoaded", () => {

    // When the page loads, call the load function
    load("../json/fortunes.json");

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