export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    faceEl.textContent = goblinData.name;
    nameEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp
    hpEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }

    goblinEl.append(nameEl, faceEl, hpEl);
    
    return goblinEl;
}