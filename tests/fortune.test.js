/**
 * @jest-environment jsdom
 */
const { load, roll, add } = require('../js/fortune.js')

describe('load', () => {
  it('should load fortunes from a JSON file', async () => {
    const url = 'https://example.com/fortunes.json';
    const fortunes = [
      { title: 'Fortune 1', description: 'Description 1', effects: { rest: 10, happiness: 20, skills: { test_taking: 30, coding: 40, thinking: 50 } } },
      { title: 'Fortune 2', description: 'Description 2', effects: { rest: -10, happiness: -20, skills: { test_taking: -30, coding: -40, thinking: -50 } } },
    ];

    // Mock the fetch function to return the desired fortunes
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ fortunes }),
    });

    const result = await load(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(result).toEqual(fortunes);
  });

  it('should return an empty array when there is an error', async () => {
    const url = 'https://example.com/fortunes.json';

    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    const result = await load(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(result).toEqual([]);
  });
});

describe('roll', () => {
  it('should return a random fortune from the array', () => {
    const fortunes = [
      { title: 'Fortune 1', description: 'Description 1', effects: { rest: 10, happiness: 20, skills: { test_taking: 30, coding: 40, thinking: 50 } } },
      { title: 'Fortune 2', description: 'Description 2', effects: { rest: -10, happiness: -20, skills: { test_taking: -30, coding: -40, thinking: -50 } } },
    ];

    // Mock the Math.random function to return 0.5 (to select the second fortune)
    global.Math.random = jest.fn().mockReturnValue(0.5);

    const result = roll(fortunes);

    expect(result).toEqual(fortunes[1]);
  });

  it('should return null if the array is empty', () => {
    const fortunes = [];

    const result = roll(fortunes);

    expect(result).toBeNull();
  });

  it('should log an error if the array is empty', () => {
    const fortunes = [];

    global.console.error = jest.fn();

    roll(fortunes);

    expect(console.error).toHaveBeenCalledWith('Array is empty');
  });
});

describe('add', () => {
  it('should add two numbers together', () => {
    const result = add(5, 10);

    expect(result).toBe(15);
  });
});
