// import functions and grab DOM elements
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-HP');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;
let goblins = [
    { id: 1, name: McStabby, hp: 2},
    { id: 2, name: LordStabbo, hp: 4},
];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
