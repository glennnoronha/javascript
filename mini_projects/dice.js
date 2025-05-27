const diceLabel = document.getElementById('diceLabel');
const rollBtn = document.getElementById('rollBtn');

let randomizer;

    
rollBtn.onclick = function () {
    randomizer = Math.floor((Math.random() * 6) + 1);
    diceLabel.textContent = randomizer;
}