'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //original
  //orderDelivery: function(obj) {
    //console.log(obj);
  //},

  //destructuring
  //calling a method with an object
  //can also assign default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  //function that accepts multiple arguments
  //then use spread operator to pass those arguments
  //three ingredients
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  //new method
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//////////////////////////////////////////////////////////////////////

//Logical Assignment Operators (ES2021)

//
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest1 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};



/*
///////////////////////////////////////////////////////////////////////

//Nullish Coalescing Operator (ES2020)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10 //restaurant.numGuests = falsy
console.log(guests);//10

//Nullish: null and undefined (NOT 0 or '') = only nullish values will short circuit
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


///////////////////////////////////////////////////////////////////////

//Short Circuiting (&& and || operators)

//Logical operator properties
//can use any data type, return any data type, and short-circuiting(short-circuit evaluation)
console.log(3 || 'Jonas');//result does not have to be a boolean
//with || OR operator if the first value is truthy it will log it
//other operand not even evaluated
console.log('' || 'Jonas');//Jonas
console.log(true || 0);//true
console.log(undefined || null);//null(also falsy)
//if first operand is falsy then the second value will be evaluated & logged

console.log(undefined || 0 || '' || 'Hello' || 23 || null);//'Hello'=first truthy operand

//practical application
//set the property
//restaurant.numGuests = 23;//then console log 23 (will not work if number of guests is 0=falsy value)
//don't know if it exists, but want to define it with default value if does not exist
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);//10
//short circuiting -less code to write
const guests2 = restaurant.numGuests || 10 //restaurant.numGuests = falsy
console.log(guests2);//10

//&& And operator short circuiting
console.log('----- AND -----');

console.log(0 && 'Jonas');//0
//returns first falsy value & does not evaluate anymore
console.log(7 && 'Jonas');//Jonas

console.log('Hello' && 23 && null && 'jonas');//null

//practical application
//don't know if orderPizza exists
//if exists order pizza
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//with && operator short circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


///////////////////////////////////////////////////////////////////////

//Rest Pattern & Parameters

///////////DESTRUCTURING////////////

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);//packs 3, 4, & 5 into a new array

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);//does not include skipped elements (REST must always be the last element)
//always just one rest in any destructuring assignment

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

/////////////////Functions//////////////////
const add = function(...numbers) {
  //console.log(numbers);//input numbers in arrays
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum +=numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);//unpacked and then packed in function

//Order Pizza
//collect all unused parameters into an array
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');//still get empty array


//////////////////////////////////////////////////////////////////////

//Spread Operator

const arr = [7, 8, 9];//array literal

//without spread operator
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//with spread operator
const newArr = [1, 2, ...arr];//dots extract the elements
console.log(newArr);

//pass argument into function
console.log(...newArr);//much nicer
console.log(1, 2, 7, 8, 9);

//building a new array (not manipulating the original) using original to expand
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//use cases:
//shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];

//merge two or more arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//spread works on all iterables (arrays, strings, maps, sets [Not objects])
//use spread on string
const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);
//console.log('j', 'o');//instead of individually
//can not use with temporal literal = not place where comma separated list used
//console.log(`${...str} Schmedtmann`);//error: unexpected token

//real world example:
//orderPasta
//const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
//console.log(ingredients);
//call orderPasta function
//restaurant.orderPasta(...ingredients);
//without spread operator
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//spread operator with objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

//shallow copies of objects
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


//////////////////////////////////////////////////////////////////////
//object destructuring

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//data usually comes in form of objects (3rd party data)

//want variable names to be different from property names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Set default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//mutating variables while destructuring
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

//start line with curly brace then JS expects a code block
//{a, b} = obj;
//wrap in parathesis
({a, b} = obj);
console.log(a, b);

//nested objects
//const {fri} = openingHours;
//console.log(fri);
const {fri: {open, close}} = openingHours;
console.log(open, close);
//can also assign new variable names
//const {fri: {open: o, close: c}} = openingHours;

/////////////////////////////////////////////////////////////////////////

//array destructuring

//without destructuring
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//can select only certain variables as needed
//const [first, second] = restaurant.categories;
//const [first, , second] = restaurant.categories;
//console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
//without destructuring
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

//destructuring
//create new array with variables inverted
//reassign the two values
[main, secondary] = [secondary, main];
console.log(main, secondary);

//function to order food
//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested array
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
//want all values individually

//destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//don't know length of array
//const [p, q, r] = [8, 9];
//console.log(p, q, r);//8, 9, undefined

//Set default values (useful when using API)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);//8, 9, 1
*/
