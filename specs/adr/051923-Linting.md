# Use Github Super Linter for Linting and Style

## Context and Problem Statement

What is the best option to keep style and code choices consistent among team members?

Should we be doing this on each developer's local machine, in our ci/cd pipeline, or both?

## Considered Options

* Prettier
* ESLint
* Github Super Linter

## Decision Outcome

Chosen option: **Github Super Linter**, because while Prettier/ESLint seem to be the industry standard, Github Super Linter seems the most straightforward to implement into our ci/cd pipeline while also having all the necessary functionality we need. 

Also, we decided to have each developer set up linting extensions on their own IDE while also having the Github Super Linter in our ci/cd pipeline as the best solution.