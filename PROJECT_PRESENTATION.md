## Mobile Network Provider Kata

What you will learn

## Users will :

1. Working with strings and input validation
2. Conditinal logic
3. Testing and Debugging
4. Problem Solving

## Overview

In a distopian future the world is recovering from covid 32. The cost of living crisis is currently in it's 4th iteration due to the amount of digital interactivity being at an all time high, mobile phone network providers have put a limit on all networks. Whilst the consumers credit is universal and agreed upon each provider has decided that they will set thier own rates for phone calls and messages.

You have some hard choices to make as to how you bugdet your credit as you have family, friends, and work you will need to call throughout the month. Luckly you did research and now have a list of all the providers and tarrifs.

Providers have a code at the start of each of thier users numbers that identify which provider the number is with. Here is the list:

`07107` -  O2\
`07400`	-  Three\
`07551`	-  Vodafone\
`07550` -  EE / T-Mobile\
`07777`	-  BT\
`07448`	-  Lycamobile\
`07666` -  Skynet


## Problem statement:

Create a function `findProvider` that will take a integer `n` and return a string matching the provider to the number or `Unknown Provider` if no matches are found.



## Expected output

input 07445347505 | output  Network Provider: Three

## Constraints

While `n` is an integer the key value pair are strings.

## Implementation

The function skeleton is provided in `main.js`

```js
 function findProvider(n) {
    // write your code here
    }
```

## Want to try?

1. Clone this project to your local machine:
```bash
git clone git@github.com:SchoolOfCode/week-6-hackathon-skudz96.git
```
2. Navigate to the project folder:
```bash
cd week-6-hackathon-skudz96
```
3. Install packages (should download vitest):
```bash
npm install
```
In case you don't see vitest in the package.json:
```bash
npm install vitest
```
4. Run the test script, head over to main.js, and see the test feedback in the console! 
```bash
npm run test
```
Good luck!

