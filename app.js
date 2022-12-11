const nameDisplay = document.getElementById('name-display');
console.log (nameDisplay);
nameDisplay.textContent = 'Raven';
const nameInput = document.getElementById('name-input')
nameDisplay.style.Color = 'red';

const booger = document.getElementById('nametag');
booger.style.backgroundColor = 'purple';

const button = document.getElementById('update-button');
button.addEventListener('click',() => {
    console.log('i am clicking the button');
    nameDisplay.textContent = nameInput.value;
});

const pronoun = document.getElementById('update-pronoun');
button.addEventListener('click',() => {
    console.log('change');
    console.log(pronounDisplay)
    pronounDisplay.textContent = pronounInput.value;
}