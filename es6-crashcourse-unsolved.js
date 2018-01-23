/**********************************************
    STRINGS
**********************************************/

// 1. Template literals
// (See exercise 105-Stu_GameOfStrings for help)

const firstName = "Lionel";
const lastName = "Messi"
const age = "30 years old";
const profession = "playing soccer"

// DO: convert the string in this console.log() to a template literal
console.log(firstName + " " + lastName + " is " + age + " and is good at " + profession + ".");
console.log(`${firstName} ${lastName} is ${age} and is good at ${profession}.`)




/**********************************************
    ARRAY METHODS
**********************************************/

// 2. New array methods

// DO: List the four new array methods with a description of what they are used for. 
// (Bonus: include array method callbacks and parameters)
//Array.forEach()
//Array.map()
//Array.filter()
//Array.reduce()




// 3. Using New Array Methods.

const myArray = [4, 6, 2, 3, 8, 9];

myArray.forEach(function(element) {
    console.log(element)
});

let map = myArray.map(x => x * 2)
   console.log(map)

let filter = myArray.filter(number => number > 7)
    console.log(filter)

let reduce = myArray.reduce((prev, curr) => prev + curr);
    console.log(reduce)

// DO: 
// (Note: we will turn these into arrow functions later, so don't feel like you have to do that now.)

// a. Use the forEach method to console.log each element in the array.

// b. Use the filter method to make a new array that has only even numbers.
let filtered = myArray.filter(number => number % 2 == 0);
    console.log(filtered)

// c. Use the map method to make a new array that has string versions of the numbers. (I.e. the number 4 will be the string "4" and so on.)
let stringed = myArray.map(string => string.toString);
    console.log(stringed)
// d. Use the reduce method to get the product of all the numbers.




/**********************************************
    ARROW FUNCTIONS
**********************************************/
// (Use `107-Ins_ArrowExample/arrows-intro.js` for reference.)

// 4. Rewrite ES5 Functions

// DO: Rewrite the following functions as arrow functions
// a. 
    var biggerNumber = function(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else if (num1 < num2) {
            return num2;
        } else {
            return "They are the same";
        }
    }
    
    const bigNumber = (num1, num2) => {
        if (num1 > num2) {
            return num1;
        } else if ( num1 < num2) {
            return num2
        } else {
            return "they are the same"
        }
    }
    bigNumber(1 , 5)
// b. 
    var giveMessageTo = function(name, message) {
        console.log("Hi " + name + "! " + message)
    } 
    // (Don't forget to use template literals!)
    const messaged = (name, message) => console.log(`Hi ${name}! ${message}`)
    messaged("david", "you're awesome");
    console.log(messaged);
    
// c. 
    var sayHiTo = function(name) {
        console.log("Hi " + name + "!")
    }
    
// d. 
    function divideBy2(number) {
        return number / 2;
    }

    const divideByTwo = number => number / 2;
    divideByTwo(10);




// 5. Write Arrow Functions From Scratch

// DO:
// a. Write an arrow function that takes two parameters, concatenates them, and returns this concatenated result. 
// (For this exercise, include the return statement in the arrow function. You can assume the parameters will be strings - no need to convert.)
const combined = (word1, word2) => console.log(`${word1}${word2}`);
// b. Write an arrow function that takes two parameters (assume numbers) and returns their product.
// (For this exercise, write the function such that the "return" is implied. You can assume the parameters will be numbers - no need to convert.)
const product = (num1, num2) => num1 * num2;

// c. Write an arrow function that takes only one parameter and returns the result of that parameter plus itself.
// (For this exercise, write the function as concisely as possible.)
const addMyself = num3 => num3 + num3;

// d. Write an arrow function that takes zero parameters and console logs "Hello World".
// (For this exercise, write the function as concisely as possible.)



// 6. Arrow Functions with Array Methods

// DO: Do exercises 3a-3d, but using arrow functions. Be as concise as possible. Use ternary operators where applicable.





/**********************************************
    DECONSTRUCTORS - ARRAYS
*********************************************/
// For all of the following, use ES6 deconstructor syntax.

const list = ["raspberries", "cheese", "chocolate", "coffee"]

// 7. Variable assignment from array

// DO: Deconstruct the list array above to make 3 variables equal to each of the first, second, and fourth items in the array.


// 8. Spread operator

// DO:

// a. Store the first item of the list array in a variable, then store the remaining items in an array called remainingItems.

// b. Add "milk" to the remainingItems array and store it in a new array called newList.


 
 
/**********************************************
    DECONSTRUCTORS - OBJECTS
*********************************************/
// For all of the following, use ES6 deconstructor syntax.

// 9. Constructing an object from variables

// DO: Make a car object that has the following constants as key/value pairs.
const make = "Toyota";
const model = "Camry";
const color = "Blue";



// 10. Object Deconstruction
const bigHouse = {
    bedrooms: 5,
    bathrooms: 3,
    livingRooms: 1,
    diningRooms: 2,
    hasPatio: true,
}

// DO: 
// a. Make a variable called bedrooms with the same value as the bedrooms property of bigHouse.

// b. Make two variables called bathrooms and livingRooms with the same values as the bathrooms and livingRooms properties of bigHouse.

// c. Make a variable called washrooms with the same value as the bathrooms property of bigHouse. (Hint: this will look similar to part a, but you will be "renaming" bathrooms.)

// d. Make a variable called "diningRooms" from the diningRooms property of bigHouse. Give it a default value of 1, which will be assigned if bigHouse has no diningRooms property.
// (Obviously, we can see in this case that bigHouse DOES have a diningRooms property. But practicing assigning default values is useful for when we don't know if the property exists.)





/**********************************************
    DECONSTRUCTORS IN FUNCTION PARAMETERS
*********************************************/

// 11. Default parameters

// DO: 
// a. Write a function that takes two parameters and multiplies them together. If no parameters are supplied, this function should have default values of 4 and 5.

// b. Write a function that takes an object (like bigHouse) as a parameter, deconstructs one of it's properties, and console logs it.  
// (Bonus: rename bedrooms to bdrms as well)


    
