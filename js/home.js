/**
 * Load the player from the JSON file
 * **This function is asynchronous.** It returns a Promise object that will resolve to an array of fortunes.
 *
 * @param {string} url - URL of the player json file
 * @returns {Promise<Object>} - the json object representing the default player
 */
function loadDefaultPlayer (url) {
  return fetch(url) // Fetch the JSON file using the fetch function
    .then(response => response.json()) // Convert the response to a JSON object
    .then(data => {
      return data // Return the list of fortunes
    })
    .catch(error => {
      console.error(error) // Log any errors to the console
      return []
    })
}

const startButton = document.querySelector('.start-button')

startButton.addEventListener('click', function () {
  loadDefaultPlayer('../json/player.json').then(player => {
    console.log(player)
    localStorage.setItem('player', JSON.stringify(player))
  })
})

module.exports = { loadDefaultPlayer }
