[![CI/CD Full Pipeline](https://github.com/cse110-sp23-group7/cse110_rogue/actions/workflows/cicd.yml/badge.svg?branch=master)](https://github.com/cse110-sp23-group7/cse110_rogue/actions/workflows/cicd.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/9ac5b25d8286395a9b45/maintainability)](https://codeclimate.com/github/cse110-sp23-group7/cse110_rogue/maintainability)

# Team 404: CSE110 Roguelike Fortune Teller 
Welcome to Team 404's magical journey through CSE 110! Here you will navigate through a busy quarter, and finish the course with the ease of a few clicks. Beware, though; your choices may cost you...

[Roadmap Document](../specs/markdown/roadmap.md)

[Final Deployed Website](https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html)

[Documentation](https://cse110-sp23-group7.github.io/cse110_rogue/specs/docs/)

## **_Version 1.1.1_**
Features Added:-
- Text-to-Speech incorporated into encounters and the action we take.

This is the final release of our project features various minor bug fixes as well as a TTS feature that provides more accessibility to our users.

## **_Version 1.0.0_**
Features Added:-
- **Encounter Screen**: Users have the ability get directed to the encounters screen, which the third screen from the home screen. User can now see what fate they have come across and what action they want to take on that 
- **Pixelated Assets and Buttons**: To follow the Rogue-like and pixelated theme, we changed all the assests like pictures and background, and all buttons pixelated(8-bit pixel). 
- **Background Audio**: Added a mystial audio in the background we adds to our theme and the encounters. 

We deployed the whole CI/CD Pipeline and it works efficiently  which includes Linting, Code Quality, Tests, and Documentation check. 

## **_Version 0.1.0_**
The first version of our webapp features a prototype skeleton, with a working homepage, fortune page, and the skeleton of the encounter page. Our CI/CD pipeline is still in the works. Stay tuned for future releases.

---

## Setup
1. Clone the repository: `git clone https://github.com/cse110-sp23-group7/cse110_rogue.git`
2. To install dependencies, first cd into the cfg folder using `cd ./cfg`
3. Then run `npm install`
4. You can then run the following commands in the cfg directory:
- `npm run wdio` - runs our tests
- `npm run docs` - generates documentation
- `npx htmlhint "../html/*.html"` - lints html files
- `npx stylelint "../css/*.css"` - lints css files
- `npx eslint "../**/js/*.js"` - lints javascript files
- `npx eslint "../**/test/specs/*.js"` - lints test files

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
