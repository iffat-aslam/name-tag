console.log('hello world!');


// data types
// numbers
42;
//strings
const answer = "42";
// can't do this to constants!
// answer = 12;
let dogName = 'Benny';
console.log ('My dog\'s name is ${dogName}.${dogName} is very cute. Ben is 7.')

// arrays
let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors[2])

//objects
let benny = {
    name: 'Benny',
    age: 7,
    breeds: ['terrier', 'Chihuahua', 'Pekingese'],
}
console.log(benny);

//functions
const nameDisplay = document.getElementById('name-display')


fucntion dayHello() {
    console.log('hello world from sayHello function');
}
sayHello()