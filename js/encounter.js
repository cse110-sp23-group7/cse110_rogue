window.addEventListener('load', function () {
  fetch('../json/encounters.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      const randomIndex = Math.floor(Math.random() * data.encounters.length)
      const encounter = data.encounters[randomIndex]

      document.getElementById('text-content').textContent = encounter.text
      document.getElementById('encounter-img').src = encounter.imagePath

      const textContentElement = document.getElementById('text-content')
      const text = encounter.text
      document.getElementById('text-content').textContent = ''
      let index = 0

      // Function to display the text character by character
      let isLoading = true
      function displayText () {
        if (index < text.length) {
          textContentElement.textContent += text.charAt(index)
          index++
          setTimeout(displayText, 20) // Adjust the delay between characters here
        } else {
          isLoading = false
        }
      }

      displayText()

      const actionButtons = document.getElementsByClassName('option-button')
      for (let i = 0; i < actionButtons.length; i++) {
        actionButtons[i].textContent = encounter.actions[i].name
      }

      let hasActed = false
      // Set events for each action button
      for (let i = 0; i < actionButtons.length; i++) {
        actionButtons[i].addEventListener('click', function () {
          if (!isLoading && !hasActed) {
            const index = Array.from(actionButtons).indexOf(this)
            const statName = encounter.actions[index].statName
            const minStat = encounter.actions[index].minStat
            // eslint-disable-next-line no-undef
            const playerObj = new Player(loadPlayer()).player_obj
            const playerStats = playerObj.effects

            console.log(playerObj)
            if (playerStats[statName] > minStat) {
              // Passed encounter
              playerObj.expected_grade = parseInt(playerObj.expected_grade) + 5
              document.getElementById('text-content').textContent = encounter.actions[i].positiveResult
            } else {
              // Failed encounter
              playerObj.expected_grade = parseInt(playerObj.expected_grade) - 5
              document.getElementById('text-content').textContent = encounter.actions[i].negativeResult
            }
            localStorage.setItem('player', JSON.stringify(playerObj))

            console.log(`changed player expected grade to ${playerObj.expected_grade}`)

            // Disables clicking on all action buttons after selecting one
            hasActed = true

            setTimeout(function () {
              window.location.href = '../html/fortune.html'
            }, 2000)
          }
        })
      }
    })
    .catch(function (error) {
      console.log('Error:', error)
    })
})

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
