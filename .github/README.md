[![CI/CD Full Pipeline](https://github.com/cse110-sp23-group7/cse110_rogue/actions/workflows/cicd.yml/badge.svg?branch=master)](https://github.com/cse110-sp23-group7/cse110_rogue/actions/workflows/cicd.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/9ac5b25d8286395a9b45/maintainability)](https://codeclimate.com/github/cse110-sp23-group7/cse110_rogue/maintainability)

# Team 404: CSE110 Roguelike Fortune Teller 
Welcome to Team 404's magical journey through CSE 110! Here you will navigate through a busy quarter, and finish the course with the ease of a few clicks. Beware, though; your choices may cost you...

[Changelog](../specs/markdown/changelog.md)

[Roadmap Document](../specs/markdown/roadmap.md)

[Final Deployed Website](https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html)

[Documentation](https://cse110-sp23-group7.github.io/cse110_rogue/specs/docs/)


## Setup
1. Clone the repository: `git clone https://github.com/cse110-sp23-group7/cse110_rogue.git`
2. To install dependencies, first cd into the cfg folder using `cd ./cfg`  
3. Then run `npm install`. Also, run this command in the test and js folder to quickly install the eslint-standard package  
4. You can then run the following commands in the cfg directory:
- `npm run wdio` - runs our tests
- `npm run docs` - generates documentation
- `npm run lint:html` - lints html files
- `npm run lint:css` - lints css files
- `npm run lint:js` - lints javascript files
- `npm run lint:tests` - lints test files

## Project Structure
```
cse110_rogue/
|-- .github/
|   |-- workflows/
|   |   |-- cicd.yml # Our CI/CD pipeline
|   |-- README.md
|-- admin/
|   |-- branding/
|   |   |-- 404teamphoto.png
|   |-- cipipeline/
|   |   |-- githubactionsphase1.png
|   |   |-- phase1.drawio.png
|   |   |-- phase1.md
|   |   |-- phase1.mp4
|   |-- meetings/
|   |   |-- /* contains all of our meeting minutes */
|   |-- misc/
|   |   |-- /* contains random images and rules document */
|   |-- videos/
|   |   |-- /* contains team videos */
|   |-- team.md # Our team page
|-- assets/
|   |-- pictures/
|   |   |-- /* Contains all of the pictures we used for the website */
|   |-- sounds/
|   |   |-- mysterious-suspense-sound.mp3 # Our background noise
|-- cfg/
|   |-- /* contains config files */
|-- css/
|   |-- .stylelintrc.json # css linting config
|   |-- credits.css
|   |-- encounter.css
|   |-- fortune.css
|   |-- help.css
|   |-- home.css
|   |-- styles.css
|-- html/
|   |-- credits.html
|   |-- encounter.html
|   |-- ending.html
|   |-- fortune.html
|   |-- help.html
|   |-- home.html
|-- js/
|   |-- .eslintrc.yml # js linting config
|   |-- encounter.js
|   |-- fortune.js
|   |-- home.js
|   |-- player.js
|-- json/
|   |-- encounters.json
|   |-- fortunes.json
|   |-- player.json
|-- specs/
|   |-- adr/
|   |   |-- 051923-Linting.md
|   |   |-- 052023-Code-Quality.md
|   |   |-- 052023-Unit-Testing.md
|   |-- brainstorm/
|   |   |-- Brainstorming.pdf
|   |-- docs/
|   |   |-- /* contains the auto-generated jsdocs */
|   |-- markdown/
|   |   |-- roadmap.md
|   |-- pitch/
|   |   |-- Pitch Presentation.pptx
|-- test/
|   |-- specs/
|   |   |-- e2e.test.js
|   |   |-- encounter.test.js
|   |   |-- player.test.js
|   |-- eslintrc.yml
|   |-- wdio.conf.js
|-- .gitignore
|-- index.html # automatically redirects to home.html
