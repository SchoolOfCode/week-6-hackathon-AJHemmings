# Mobile Network Provider Kata

A hackathin project to build a codewars style Kata using test-driven-development.


## Users will learn :

1. Working with strings and input validation
2. Conditinal logic
3. Testing and Debugging
4. Problem Solving

## Overview

In a dystopian future, the world is grappling with the aftermath of COVID-32. The cost-of-living crisis has entered its fourth iteration, fueled by unprecedented levels of digital interactivity. In response, mobile phone network providers have imposed strict limits on all networks.

Although consumer credit is now universal and universally accepted, each provider has introduced their own rates for phone calls and messages, creating a fragmented and costly communications landscape.

As a result, you're faced with difficult decisions about how to budget your limited credit. You need to stay connected with family, friends, and work contacts throughout the month—but careful planning is essential.

Fortunately, your research has paid off: you've compiled a list of all the providers and their tariffs. Each provider uses a unique code at the start of their users' phone numbers, making it possible to identify which network you're interacting with. Armed with this information, it's time to strategize and make every credit count.

Here is the list of providers and their codes:

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

input 074005347505 = > output "Three"

input 209458673495 = > output "Unknown Provider"

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
git clone https://github.com/SchoolOfCode/week-6-hackathon-AJHemmings
```
2. Navigate to the project folder:
```bash
cd week-6-hackathon-AJHemmings
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

