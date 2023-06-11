/* eslint-disable no-undef */
require('../../js/encounter.js')

describe('Encounter', () => {
  it('should apply the effects of an encounter to player statistics', async () => {
    // Get the player object from localStorage
    /** const playerBefore = await browser.execute(() => {
      return localStorage.getItem('player')
    }) */

    // Generate a number from 1 through 4, inclusive
    const random = Math.floor(Math.random() * 4) + 1
    // Get the corresponding option
    const option = await $('button=Action ' + random)
    // Click the option
    option.click()

    // Check to see if the player object has been updated
    /** const playerAfter = await browser.execute(() => {
      return localStorage.getItem('player')
    })

    // The two player objects should be different
    expect(playerAfter).not.toEqual(playerBefore) */
  })
})
