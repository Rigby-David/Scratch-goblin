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
    { id: 1, name: McStabby, hp: 2 },
    { id: 2, name: LordStabbo, hp: 4 },
];
// set event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault;
    // user has supplied a name + submitted the form
    const data = new FormData(form);
    
    const goblinName = data.get('goblin-name');

    // make a new goblin object with that user input

    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    // add that object to the array of goblins in state

    goblins.push(newGoblin);

    displayGoblins();
});

  // get user input

function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
      const goblinEl = renderGoblin('goblin');
    }
}


  // use user input to update state 
  // update DOM to reflect the new state
