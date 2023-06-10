/* eslint-disable no-undef */
// Assuming you're using a testing framework like Mocha or Jest

const { loadDefaultPlayer } = require('../js/home.js')

describe('loadDefaultPlayer', () => {
  it('should load the default player from a JSON file', async () => {
    const url = 'http://127.0.0.1:5500/html/home.html/player.json'
    const defaultPlayer = {
      name: 'John Doe',
      level: 1,
      stats: { health: 100, strength: 10, agility: 5 }
    }

    // Mock the fetch function to return the desired default player
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(defaultPlayer)
    })

    const result = await loadDefaultPlayer(url)

    expect(fetch).toHaveBeenCalledWith(url)
    expect(result).toEqual(defaultPlayer)
  })

  it('should log an error and return an empty object if there is an error', async () => {
    const url = 'https://example.com/player.json'

    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'))

    global.console.error = jest.fn()

    const result = await loadDefaultPlayer(url)

    expect(fetch).toHaveBeenCalledWith(url)
    expect(console.error).toHaveBeenCalled()
    expect(result).toEqual({})
  })
})
