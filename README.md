# Team 404: CSE110 Roguelike

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

> Docs will be generated in the `./out` directory. and can be opened using a browser. 
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
|   |-- app.test.js
|-- package.json        # Project metadata. Use npm to install dependencies
```