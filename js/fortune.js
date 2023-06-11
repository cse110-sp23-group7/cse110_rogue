/**
 * Load the fortunes from the JSON file
 * **This function is asynchronous.** It returns a Promise object that will resolve to an array of fortunes.
 *
 * @param {string} url - The URL of the JSON file
 * @returns {Promise<Array>} - An array containing Fortune objects.
 */
function load (url) {
  return fetch(url) // Fetch the JSON file using the fetch function
    .then(response => response.json()) // Convert the response to a JSON object
    .then(data => {
      return data.fortunes // Return the list of fortunes
    })
    .catch(error => {
      console.error(error) // Log any errors to the console
      return []
    })
}

/**
 * Loads player object from localStorage
 *
 * @returns {Object} - An JSON object representing the player
 */
function loadPlayer () {
  const player = JSON.parse(localStorage.getItem('player'))
  if (player != null) {
    return player
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
function roll (array) {
  if (array.length === 0) {
    console.error('Array is empty')
    return null
  }

  const index = Math.floor(Math.random() * array.length)
  console.log('Rolled ' + index + ': ' + array[index].title)
  return array[index]
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    let fortunesList = []
  
    document.querySelector('.encounter-button').style.display = 'none'
  
    // When the page loads, call the load function
    load('../json/fortunes.json').then(fortunes => {
      console.log('Loaded ' + fortunes.length + ' fortunes')
      console.log(fortunes)
      fortunesList = fortunes
    })
  
    const flipCards = document.querySelectorAll('.flip-card')
  
    // When the flip card is clicked, call the roll function
    flipCards.forEach(flipCard => {
      flipCard.addEventListener('click', function (event) {
        event.preventDefault()
  
        // Roll for the fortune
        const fortune = roll(fortunesList)
        // eslint-disable-next-line no-undef
        const player = new Player(loadPlayer())
        player.add_fortune(fortune)
        localStorage.setItem('player', JSON.stringify(player.player_obj))
  
        const fortuneTitleElement = flipCard.querySelector('.fortune-title')
        const fortuneDescriptionElement = flipCard.querySelector('.fortune-description')
        const fortuneEffectsElement = flipCard.querySelector('.fortune-effects')
  
        // Update the fortune content on the back side of the flip card
        fortuneTitleElement.textContent = fortune.title
        fortuneDescriptionElement.textContent = fortune.description
        fortuneEffectsElement.innerHTML =
                  '<br>Effects: <br>' +
                  'Rest: ' + fortune.effects.rest + '<br>' +
                  'Happiness: ' + fortune.effects.happiness + '<br>' +
                  '<br>Skills: <br>' +
                  '   Test Taking: ' + fortune.effects.skills.test_taking + '<br>' +
                  '   Coding: ' + fortune.effects.skills.coding + '<br>' +
                  '   Thinking: ' + fortune.effects.skills.thinking + '<br>'
  
        // Flip the card to show the back side
        flipCard.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)'
  
        // Hide the flip card and display the encounter button
        document.querySelector('.encounter-button').style.display = 'block'
  
        // Disable clicking on all flip cards
        flipCards.forEach(card => {
          card.style.pointerEvents = 'none'
        })
      })
    })
  })
}

// Only export the functions if we are running in a Node.js environment (i.e. running tests)
if (typeof module === 'object') {
  module.exports = { load, roll }
}
