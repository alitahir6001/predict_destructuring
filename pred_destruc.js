// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.


// 1

const cars = ['Tesla', 'Mercedes', 'Honda'] // The array
const [ randomCar ] = cars // Destructuring the first value of the index from the array cars
const [ ,otherRandomCar ] = cars // destructuring the second index value from the array cars - the comma skips the first index value

//Predict the output
console.log(randomCar) // Output will be "Tesla"
console.log(otherRandomCar) // Output will be "Mercedes"

// 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//Predict the output
console.log(name); // This will throw an error message, because the variable 'name' inside the dictionary has been given a new name, 'otherName' and no longer exists
console.log(otherName); // Output will be "Elon"

// 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//Predict the output
console.log(password); // Output = Error: Undefined
console.log(hashedPassword); // Output = "12345"

// I got the outputs backwards so this one is wrong. I think it's because 'password' property doesn't exist inside the dictionary object, and therefore cannot be reassigned to a new variable name 'hashedPassword'

// 4 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2

//Predict the output
console.log(first == second); // Output is probably an error, or false, because 2 does not == 5 
console.log(first == third); // Output is true, because 2 does == 2

// Bingo!


// 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //unpack the property key from the object lastTest
const { secondKey } = lastTest; // unpack the property secondKey from the object lastTest
const [ ,willThisWork] = secondKey; // nothing to unpack or skip because there is no property called 'willThisWork'.  So no, this actually wont work.

//Predict the output
console.log(key); // Output is 'value (there's only one value for the property 'key')
console.log(secondKey); // Output is the entire array of 'secondKey'
console.log(secondKey[0]); // output is 1
console.log(willThisWork); // Error message - I think undefined.

// I got the last prediction wrong -- I think i see what i missed, in line 65 we're asking to skip the first index value of the array 'secondKey', landing on the next [i] value, and assigning it a new variable name called 'willThisWork'

// So it did in fact work and I'm a dumb bum chum.

