/* eslint-disable no-undef */
const Fortune = require('../../js/fortune.js')

describe('Fortune App', () => {
  it('can load player from local storage', () => {
    browser.url('http://127.0.0.1:5500/html/home.html');

    // Assuming you have initialized and configured your WebdriverIO instance as 'browser'

    // Execute JavaScript code to get the local storage items
    const localStorageItems = browser.execute(() => {
      // Access the local storage object
      const localStorage = window.localStorage;

      // Get all the keys in local storage
      const keys = Object.keys(localStorage);

      // Create an object to store the key-value pairs
      const items = {};

      // Iterate over the keys and get the values
      for (const key of keys) {
        items[key] = localStorage.getItem(key);
      }

      // Return the key-value pairs
      return items;
    });

    // Output the local storage items
    console.log(localStorageItems);

    // const player = browser.execute(() => {
    //   return browser.getLocalStorageItem('player');
    //   // return window.localStorage.getItem('player');
    // });

    // console.log("Player object: ", player);

    // expect(player.applied_fortunes).toBe();
    // expect(player).toHaveAttr('effects');
  })

  // it('should roll a random fortune when a flip card is clicked', () => {
  //   // Click a flip card
  //   const flipCard = browser.$('.flip-card');
  //   flipCard.click();

  //   // Wait for the fortune to be rolled and displayed
  //   browser.waitUntil(() => {
  //     return flipCard.$('.fortune-title').textContent !== '';
  //   }, { timeout: 5000, timeoutMsg: 'Fortune was not rolled' });

  //   // Get the rolled fortune
  //   const fortuneTitle = flipCard.$('.fortune-title').textContent;
  //   const fortuneDescription = flipCard.$('.fortune-description').textContent;

  //   console.log("This is the title: ", fortuneTitle); // TODO: why is this function anon?
  //   // expect(typeof fortuneTitle).toBe('String');
  //   // expect(fortuneDescription).to.be.a('string').and.not.empty;
  // });

  // it('should add a rolled fortune to the player object in localStorage', () => {
  //   // Click a flip card
  //   const flipCard = browser.$('.flip-card');
  //   flipCard.click();

  //   // Wait for the fortune to be rolled and displayed
  //   browser.waitUntil(() => {
  //     return flipCard.$('.fortune-title').getText() !== '';
  //   }, { timeout: 5000, timeoutMsg: 'Fortune was not rolled' });

  //   // Get the rolled fortune
  //   const fortuneTitle = flipCard.$('.fortune-title').textContent;

  //   // Get the player object from localStorage
  //   const player = browser.execute(() => {
  //     return JSON.parse(window.localStorage.getItem('player'));
  //   });

  //   expect(typeof player).toBe('object');
  //   expect(player).toHaveAttr('applied_fortunes');
  //   // expect(player[applied_fortunes].length).toBe(1);
  // });
});