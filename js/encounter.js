/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
if (typeof window !== 'undefined') {
  window.addEventListener('load', function () {
    fetch('../json/encounters.json')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        const playerObjEncounter = new Player(loadPlayer()).player_obj
        const encounter = data.encounters[playerObjEncounter.encounterIndex]

        if (!window.location.href.includes('encounter')) {
          return
        }

        document.getElementById('text-content').textContent = encounter.text
        document.getElementById('encounter-img').src = encounter.imagePath

        const textContentElement = document.getElementById('text-content')
        let text = encounter.text
        document.getElementById('text-content').textContent = ''
        let textIndex = 0

        // Function to display the text character by character
        let isLoading = true
        function displayText () {
          if (textIndex < text.length) {
            textContentElement.textContent += text.charAt(textIndex)
            textIndex++
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
              if (playerObj.expected_grade < 0) {
                playerObj.expected_grade = 0
              }
              if (playerObj.expected_grade > 100) {
                playerObj.expected_grade = 100
              }
              localStorage.setItem('player', JSON.stringify(playerObj))

              console.log(`changed player expected grade to ${playerObj.expected_grade}`)

              // Disables clicking on all action buttons after selecting one
              hasActed = true

              text = document.getElementById('text-content').textContent
              document.getElementById('text-content').textContent = ''
              textIndex = 0

              // Function to display the text character by character
              isLoading = true

              displayText()

              playerObj.encounterIndex += 1
              localStorage.setItem('player', JSON.stringify(playerObj))

              const continueButton = document.getElementById('continue-button')
              continueButton.style.display = 'block' // Show the Continue button
              continueButton.addEventListener('click', function () {
                window.location.href = '../html/fortune.html'
              })
            }
          })
        }
      })
      .catch(function (error) {
        console.log('Error:', error)
      })
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
