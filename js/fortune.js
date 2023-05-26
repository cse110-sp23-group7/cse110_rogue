
/**
 * Load the fortunes from the JSON file
 * **This function is asynchronous.** It returns a Promise object that will resolve to an array of fortunes.
 *
 * @param {string} url - The URL of the JSON file
 * @returns {Promise<Array>} - An array containing Fortune objects.
 */
function load(url) {

    return fetch(url)                                        // Fetch the JSON file using the fetch function
        .then(response => response.json())         // Convert the response to a JSON object
        .then(data => {
            return data.fortunes;                           // Return the list of fortunes
        })
        .catch(error => {
            console.error(error)                            // Log any errors to the console
            return [];
        });
}

/**
 * Loads player object from localStorage
 * 
 * @returns {Object} - An JSON object representing the player
 */
function load_player() {

    let player = JSON.parse(localStorage.getItem("player"));
    if (player != null) {
        return player;
    }
}

/**
 * Get a random fortune from the array of fortunes.
 * Each fortune has the following properties:
 *
 * ```json
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
 * ```
 *
 * Each integer is a value between -100 and 100 inclusive, and reflects the stat changes to the user.
 * For example, a fortune with a rest value of 10 will increase the user's rest by 10.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Array} array - An array of fortune objects
 * @returns {Object} - A random fortune object
 */
function roll(array) {

    if (array.length === 0) {
        console.error("Array is empty");
        return null;
    }

    const index = Math.floor(Math.random() * array.length);
    console.log("Rolled " + index + ": " + array[index]["title"]);
    return array[index];
}

/**
 * Add two numbers together. This is a simple function to demonstrate unit testing.
 *
 * @param a {int} First number
 * @param b {int} Second number
 * @returns {int} The sum of the two numbers
 */
function add(a, b) {
    return a + b;
}

window.addEventListener("DOMContentLoaded", () => {

    let fortunes_list = [];

    document.querySelector(".encounter-button").style.display = 'none';

    // When the page loads, call the load function
    load("../json/fortunes.json").then(fortunes => {
        console.log("Loaded " + fortunes.length + " fortunes");
        console.log(fortunes);
        fortunes_list = fortunes;
    });

    // When the button is clicked, call the roll function
    document.querySelector(".fortune-button").addEventListener("click", function (event) {
        event.preventDefault();
        // Roll for the fortune
        const fortune = roll(fortunes_list);

        let player = new Player(load_player());
        player.add_fortune(fortune);
        localStorage.setItem('player', JSON.stringify(player));

        document.querySelector(".fortune-description").innerHTML = fortune["description"];
        document.querySelector(".fortune-title").innerHTML = fortune["title"];
        document.querySelector(".fortune-effects").innerHTML =
            "<br>Effects: <br>" +
            "Rest: " + fortune["effects"]["rest"] + "<br>" +
            "Happiness: " + fortune["effects"]["happiness"] + "<br>" +
            "<br>Skills: <br>" +
            "   Test Taking: " + fortune["effects"]["skills"]["test_taking"] + "<br>" +
            "   Coding: " + fortune["effects"]["skills"]["coding"] + "<br>" +
            "   Thinking: " + fortune["effects"]["skills"]["thinking"] + "<br>";

        document.querySelector(".encounter-button").style.display = 'block';
        document.querySelector(".fortune-button").style.display = 'none';

    });

});

// Only export the functions if we are running in a Node.js environment (i.e. running tests)
if (typeof module === 'object') {
    module.exports = { load, roll, add };
}