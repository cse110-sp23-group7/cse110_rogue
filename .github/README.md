[![CI/CD Full Pipeline](https://github.com/cse110-sp23-group7/cse110_rogue/actions/workflows/cicd.yml/badge.svg?branch=master)](https://github.com/cse110-sp23-group7/cse110_rogue/actions/workflows/cicd.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/9ac5b25d8286395a9b45/maintainability)](https://codeclimate.com/github/cse110-sp23-group7/cse110_rogue/maintainability)



# Team 404: CSE110 Roguelike Fortune Teller 
Welcome to Team 404's magical journey through CSE 110! Here you will navigate through a busy quarter, and finish the course with the ease of a few clicks. Beware, though; your choices may cost you...

[Roadmap Document](../specs/markdown/roadmap.md)

[Final Deployed Website](https://cse110-sp23-group7.github.io/cse110_rogue/html/home.html)

[Documentation](../specs/docs)

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
1. Install `Node.js` and `npm` (Node Package Manager):

**Linux:**
```bash
sudo apt install nodejs npm
```

**MacOS:**
```bash
brew install node
```

**Windows:**
```bash
winget install -e --id OpenJS.NodeJS
```

2. Clone the repository:
```bash
git clone https://github.com/cse110-sp23-group7/cse110_rogue.git
```

3. Install dependencies:
```bash
npm install
```

> Current dependencies are:
> - `jest` for unit testing
> - `jsdoc` for documentation generation

## Usage
### Run unit tests:
```bash
npm run test
```

### Generate documentation:
```bash
npm run docs
```

> Docs will be generated in the `docs` directory. and can be opened using a browser. 
These docs are generated using code comments, so be sure to **comment your code!**

### Launch website: 
- Open `index.html` in a browser. Note that `index.html` will
automatically redirect the user to `home.html`.

## Project Structure
```
cse110_rogue/
|-- index.html          # Start page, automatically redirects to home.html
|-- css/
|   |-- styles.css      # Main stylesheet, applied across all pages
|   |-- fortune.css     # Stylesheet for fortune.html
|   |-- home.css        # Stylesheet for home.html
|   |-- encounter.css   # Stylesheet for encounter.html
|-- js/
|   |-- home.js         # Script for home.html
|   |-- fortune.js      # Script for fortune.html
|   |-- encounter.js    # Script for encounter.html
|-- html/
|   |-- home.html       # Home page
|   |-- fortune.html    # Fortune page
|   |-- encounter.html  # Encounter page
|-- assets/             # Images and other assets
|   |-- buttons/        # Buttons used across all pages
|   |-- sprites/        # Sprites used across all pages
|-- tests/              # Unit tests, powered by Jest
|   |-- fortune.test.js
|-- package.json        # Project metadata. Use npm to install dependencies
```
