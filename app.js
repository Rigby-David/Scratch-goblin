// import functions and grab DOM elements
import { renderGoblin } from './utils.js';

const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-HP');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;
let goblins = [
    { name: 'McStabby', hp: 2 },
    { name: 'LordStabbo', hp: 4 },
];
// set event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();
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
    form.reset();
});

  // get user input

function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
    
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();

function goblinClickHandler(goblin) {
    if (goblin.hp === 0) return;
    
    if (playerHP === 0) return;

    const playerHit = Math.random();

    if (playerHit < .5) {
        goblin.hp--;
        displayGoblins();
        alert(`You hit ${goblin.name}`);
        if (goblin.hp === 0) {
            defeatedGoblinsCount++;
            defeatedNumberEl.textContent = defeatedGoblinsCount;
        }
    } else {
        alert ('You missed');
    }
    const goblinHit = Math.random();
    if (goblinHit < .5) {
        playerHP--;
        adventurerHPEl.textContent = playerHP;
        alert (`${goblin.name} hit you!`);
        if (playerHP === 0) {
            alert ('game over');
            adventurerImgEl.classList.add('game-over');
        }
    } else {
        alert (`${goblin.name} tried to you and missed`);
    }
}
  // use user input to update state 
  // update DOM to reflect the new state
