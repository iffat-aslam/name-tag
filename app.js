const nameDisplay = document.getElementById('name-display');
console.log (nameDisplay);
nameDisplay.textContent = 'Raven';
const nameInput = document.getElementById('name-input');
nameDisplay.style.Color = 'red';

const booger = document.getElementById('nametag');
booger.style.backgroundColor = 'purple';

const nameUpdateButton = document.getElementById('update-button');
nameUpdateButton.addEventListener('click',() => {
    console.log('i am clicking the button');
    nameDisplay.textContent = nameInput.value;
});

const updatePronounBtn = document.getElementById('update-pronoun');
const pronounDisplay = document.getElementById('pronoun-display');
const pronounInput = document.getElementById('pronoun-input');
console.log('pronoun log: ', pronounDisplay);
updatePronounBtn.addEventListener('click', () => {
    console.log('change');
    console.log(pronounDisplay);
    pronounDisplay.textContent = pronounInput.value;
});