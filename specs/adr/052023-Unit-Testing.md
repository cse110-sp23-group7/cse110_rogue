# Use Webdriver.io for Unit Testing

## Context and Problem Statement

How will we write unit tests and integrate them with out ci/cd pipeline?

What will be the best option in terms of ease to setup and overall capabilities?

## Considered Options

* Jest
* Mocha
* Webdriver.io
* Storybook
* Jasmine
* Cypress
* Puppeteer
* Playwright
* AVA

## Decision Outcome

Chosen option: **Webdriver.io**, because it seems to be the most powerful:

* Cross-browser testing capabilities
* Numerous integrations to various other tools and ci/cd pipeline
* Integrates pretty nicely with Chrome DevTools
