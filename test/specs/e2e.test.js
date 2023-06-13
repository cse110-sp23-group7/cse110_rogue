/* eslint-disable no-undef */
describe('Load Content', () => {
  it('should load the homepage correctly', async () => {
    await browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html');
    await expect(browser).toHaveTitle('Home');

    const audio = await $('#mysterious-suspense-sound');
    await expect(audio).toExist();
  });

  it('should load the fortune page correctly', async () => {
    await browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/fortune.html');

    const audio = await $('#mysterious-suspense-sound');
    await expect(audio).toExist();

    // TODO: more content
  });
});

describe('Navigation', () => {
  it('should navigate from home to fortune', async () => {
    await browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html');
    const startButton = await $('.start-button');
    await startButton.click();
    await expect(browser).toHaveUrl('https://cse110-sp23-group7.github.io/cse110_rogue/html/fortune.html');
    await expect(browser).toHaveTitle('Fortune');
  });

  it('should navigate from home to credits', async () => {
    browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html');
    const creditsButton = await $('.credits-button');
    await creditsButton.click();
    await expect(browser).toHaveUrl('https://cse110-sp23-group7.github.io/cse110_rogue/html/credits.html');
    await expect(browser).toHaveTitle('Credits');
  });

  it('should navigate from home to help', async () => {
    browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html');
    const helpButton = await $('.help-button');
    await helpButton.click();
    await expect(browser).toHaveUrl('https://cse110-sp23-group7.github.io/cse110_rogue/html/help.html');
    await expect(browser).toHaveTitle('Help');
  });

  it('should navigate from credits to home', async () => {
    await browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/credits.html');
    const backButton = await $('.button');
    await backButton.click();
    await expect(browser).toHaveUrl('https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html');
    await expect(browser).toHaveTitle('Home');
  });

  it('should navigate from help to home', async () => {
    await browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/help.html');
    const backButton = await $('.button');
    await backButton.click();
    await expect(browser).toHaveUrl('https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html');
    await expect(browser).toHaveTitle('Home');
  });

  // Note: this isn't working b/c you need to choose a card first
  // it('should navigate from fortune to encounter', async () => {
  //   await browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/fortune.html');
  //   const encounterButton = await $('.encounter-button');
  //   await encounterButton.click();
  //   await expect(browser).toHaveUrl('https://cse110-sp23-group7.github.io/cse110_rogue/html/encounter.html');
  //   await expect(browser).toHaveTitle('Encounter');
  // });

  // it('should navigate from encounter to fortune', async () => {
  //   await browser.url('https://cse110-sp23-group7.github.io/cse110_rogue/html/fortune.html');
  //   const fortuneButton = await $('#continue-button');
  //   await fortuneButton.click();
  //   await expect(browser).toHaveUrl('https://cse110-sp23-group7.github.io/cse110_rogue/html/fortune.html');
  //   await expect(browser).toHaveTitle('Fortune');
  // });
});