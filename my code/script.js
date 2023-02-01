'use strict';

//Enhanced Object Literals

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //using template literal (day-6)
  //computing property names
  //[`day-${2 + 4}`]: {
  //open: 0, // Open 24 hours
  //close: 24,
  //},
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //before ES6
  //openingHours: openingHours,//property name same as object name
  //ES6 enhanced object literals
  openingHours,

  //before ES6
  //order: function (starterIndex, mainIndex) {
  //return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //},
  //Now
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //original
  //orderDelivery: function(obj) {
  //console.log(obj);
  //},

  //destructuring
  //calling a method with an object
  //can also assign default values
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  //function that accepts multiple arguments
  //then use spread operator to pass those arguments
  //three ingredients
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  //new method
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
//////////////////////////////////////////////////////////////////
//STRING METHODS PRACTICE

//goal is to transform this mess of a string into nicely formatted output
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//how we want data displayed
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//console.log(flights.split('+')); //array containing the 4 lines

//create function to get the string and change them to uppercase
//outside for loop so it's not repetitively defined
const getCode = str => str.slice(0, 3).toUpperCase();

//for of loop
for (const flight of flights.split('+')) {
  //console.log(flight); //get four strings logged seprately
  //console.log(flight.split(';')); //split data further into sections

  //de-structuring (take four pieces out of the array)
  //use array syntax for the variables
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50); //make each line the same length to align right
  //format each piece:
  //type: put red dot at begining of any delayed flight
  //replace _ with a space
  //from:use slice method to take the first three elements(characters)
  //and make those 3 letters uppercase
  //to:use slice method to take the first three elements(characters)
  //and make those 3 letters uppercase
  //time:add parenthesis around in the string
  //replace : with h

  console.log(output);
}


///////////////////////////////////////////////////////////////////
//CODING CHALLENGE #4
*/

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK!!!
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//select the button to be clicked on
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //console.log(text);//one long string containing input data
  const rows = text.split('\n'); //new line character
  //console.log(rows); //array with 5 elements

  //loop over array and in each iteration:
  //log value name converted to camelCase
  for (const [i, row] of rows.entries()) {
    //i=current index & row=first&second
    //de-construct into two variables
    //first=first word
    //second=second word
    const [first, second] = row.toLowerCase().trim().split('_');
    //make each row all lowercase
    //trim any spaces & enters
    //split at _

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
      //replace second words first letter with
      //capitalized first letter of the second Word
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    //padEnd fixes each one to a length of 20 characters
    //so ✅ line up in even row
    //at current index add ✅+1 (each iteration gets another✅)
  }
});


//////////////////////////////////////////////////////////////////
//STRINGS part 3

//SPLIT (split into multiple parts based on a divider string)
console.log('a+very+nice+string'.split('+')); //split by +
//stores result into elements of a new array
console.log('Jonas Schmedtmann'.split(' ')); //split by space

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

//JOIN with divider string (use any divider you want ' ', '/', ',', etc.)
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//capitalize a name
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //capitalize the first letter and then add it to everything but the first letter
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //same result
    //replace n at position 0 with n at position 0 in uppercase
  }
  console.log(namesUpper.join(' ')); //join together with space divider
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//PADDING a string
//adding a number of characters to a string until the string has a certain desired length
const message = 'Go to gate 23!';
//console.log(message.padStart(25, '+')); //adds padding to the start of the string
console.log(message.padStart(25, '+').padEnd(30, '+')); //can pad start and end
//first argument is desired length
//second argument is the character to pad the string with
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

//Credit card number masking
const maskCreditCard = function (number) {
  const str = number + ''; //convert number to a string
  const last = str.slice(-4); //get last 4 numbers
  return last.padStart(str.length, '*');
  // get last 4 numbers with begining padded to length of original string with *
};

console.log(maskCreditCard(43378463864647384)); //works with any length
console.log(maskCreditCard('334859493847755774747')); //also works with strings
console.log(maskCreditCard(64637836));

//REPEAT method
//allows us to repeat the same string multiple times
const message2 = 'Bad weather...All Departures Delayed...';
console.log(message2.repeat(5)); //number of times want to repeat

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

//look up string methods on MDN to learn more


//////////////////////////////////////////////////////////////////
//STRINGS part 2

const airline = 'TAP Air Portugal';

//change string to all lower case or all upper case
//no arguments required
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

//fix the capitalization in a name
const passenger = 'jOnAs'; //should be Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
//take the string in all lowercase and change the (0) first position to capital
//add the slice of the all lowercase string from (1) the second position to the end
console.log(passengerCorrect); //fixed capitalization

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; // \n = enter character

//convert to lowercase
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // takes out spaces & enters
console.log(trimmedEmail);
//shorthand
const normalizedEmail = loginEmail.toLowerCase().trim();
//also trimStart & trimEnd
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing parts of strings
const priceGB = '288,97£'; //Europe uses comma as the decimal separator
const priceUS = priceGB.replace('£', '$').replace(',', '.'); //chaining
//replace £ with $ and , with .
console.log(priceUS);

//replace entire words
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //only replaced first occurance
console.log(announcement.replaceAll('door', 'gate')); //replaces all occurances
//old way
//console.log(announcement.replace(/door/g, 'gate'));
// /regular expression/, g flag = global (all occurances targeted)

//3 methods that return Booleans
//const plane = 'A320neo';
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false
console.log(plane.startsWith('Air')); //just Ai would also be true
console.log(plane.startsWith('Aib')); //false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family!');
}

//Practice exercise
//Check if baggage of a passenger can be checked-in
const checkBaggage = function (items) {
  //always start by putting into lowercase for comparison
  const baggage = items.toLowerCase(); //without this capitals would get through
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board.');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
//without converting to lower case this Knife would get through
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

 
/////////////////////////////////////////////////////////////////
//STRINGS part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';
//character of a string at a certain position
console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log('B737'[0]); //B
//read the length property
console.log(airline.length);
console.log('B737'.length);
//methods
//index of (strings like arrays are 0 based)
console.log(airline.indexOf('r')); //position 6
//last index of (last occurance of)
console.log(airline.lastIndexOf('r')); //position 10
//also able to search for entire words
console.log(airline.indexOf('Portugal')); //case sensitive
//extract part of a string using SLICE method (gives us a sub-string)
//does not effect original string
//(if you want to use the slice store it in variable or another data structure)
console.log(airline.slice(4)); //Air Portugal, 4=position at which extraction starts
//can also specify an end parameter with slice
console.log(airline.slice(4, 7)); //Air, end value not included in the string
//length of slice is always end-begining (7-4 = 3)

//extract the first word without knowing any of the indexes
//begin at index 0 & look for first space
console.log(airline.slice(0, airline.indexOf(' '))); //TAP
//extract the last word without knowing any of the indexes
//begin at last space (+1 doesn't include the space) goes till end of string
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

//define a negative begin argument
console.log(airline.slice(-2)); //al = starts extracting from the end
//define a negative end argument
console.log(airline.slice(1, -1)); //AP Air Portuga (begin @ 1, end @ -1)

//write a function that receives an airplane seat
//and logs to the console whether it is a middle seat or not

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1); //extract the last position
  if (s === 'B' || s === 'E') console.log('You got the middle seat.');
  else console.log('You got lucky.');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//BOXING PROCESS
//strings are primitives (methods not available)
//JS is really smart
//whenever we call a method on a string, JS automatically converts that
//string primitive to a string object with the same content
//and then it's on that object where the methods are called
console.log(new String('jonas')); //like this
console.log(typeof new String('jonas')); //object
//all string methods return primitives (even if called on a string object)
console.log(typeof new String('jonas').slice(1)); //string

/////////////////////////////////////////////////////////////////
//CODING CHALLENGE #3

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: GOAL

GOOD LUCK
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())]; //[]=new array, SPREAD, the values only
console.log(events); //goal, substitute, yellow card, red card

//2
gameEvents.delete(64); //delete key 64 & it's value
console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//more specific to games actual time:
const time = [...gameEvents.keys()].pop(); //convert to array, SPREAD, keys
//pop method returns the deleted element (takes last element out & gives it to us)
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  //min = key & event = value
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}


////////////////////////////////////////////////////////////////
//Summary: Which data structure to use?
//Three Sources of data:
//1 From the program itself: Data written directly in source code
//2 From the UI: Data input from the user or data written in DOM
//3 From external sources: Data fetched for example from web API(application programming interface)
//Now = Collection of data...where to store it?
//Store in Data Structures:
//1 Arrays or Sets (Simple list)
//2 Objects or Maps (Key Value Pairs)-a way to describe the value with the key

//Data from a web API usually comes in a special data format called JSON
//basically a long string, can easily be converted into JS objects
//because it uses the same formating as JS objects and arrays
//key value pairs are essential here
//creating an array of objects is extremely common in JS

//WeakSets and WeakMaps data structures in JS
//even more data structures used in programming, but which are not built into JS
//to list a few: stacks, queues, linked lists, trees, hash tables, etc.

//BUILT IN DATA STRUCTURES in JS
//ARRAYS vs. SETS
//Arrays: use when you need ORDERED list of values (might contain duplicates)
//Use when you need to MANIPULATE data
//Sets: Use when you need to work with UNIQUE values
//Use when HIGH-PERFORMANCE is really important
//(searching/deleting an items can be up to 10 times faster than in arrays)
//Use to REMOVE DUPLICATES from arrays
//OBJECTS vs. MAPS
//Objects: More "traditional" key/value store ("abused")
//Easier to write and access values with . and []
//Use when you need to include FUNCTIONS (methods in objects)
//Use when working with JSON (can convert to map)
//Maps: Better performance
//Keys can have ANY data type
//Easy to iterate
//Easy to compute size
//Use when you simply need to map key to values
//Use when you need keys that are NOT strings


////////////////////////////////////////////////////////////////////
//MAPS: Iteration
//another way to populate the map without having to use the set mothod
//pass in an array, with several arrays (first is key, next is value)
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours)); //an array of arrays
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//maps are iterables = able to loop through
//de-construct [key, value] of question map
//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//get users input
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
//true/false
console.log(question.get(question.get('correct') === answer));

//convert map to an array
console.log([...question]); //SPREAD operator

//more methods
//console.log(question.entries());//same as previous one
console.log([...question.keys()]); //SPREAD and put in new array
console.log([...question.values()] ); //SPREAD and put in new array


////////////////////////////////////////////////////////////////////
//MAPS (data structure)
//use to map values to keys
//just like an object, data is stored in key value pairs in maps
//different than objects(keys = always strings) in that maps keys can have any type
//can even be objects, arrays, or other maps

//easiest way to create a map is an empty map
const rest = new Map();
//to fill up the map we can use the set method (use to add new data)
//pass in two arguments (key name, your custome element)
rest.set('name', 'Classico Italiano');
//add new data with mixed types (2 resturaunt locations)
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
//set updates the map it's called on and returns it

//can chain sets
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//to read data from a map use the get method (pass in the key)
console.log(rest.get('name'));
console.log(rest.get(true)); //make sure data type matches the key
console.log(1);

//use boolean keys/values to determine if current time rest is open/closed
//const time = 21;
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//check if a map contains a certain key (has method)
console.log(rest.has('categories')); //true
//delete a key/value pair (delete method)
rest.delete(2);
console.log(rest);
//size property
console.log(rest.size);
//clear all elements
//rest.clear();

//use arrays or objects as map keys
//rest.set([1, 2], 'Test');//undefined
//console.log(rest);
//wont retrieve 'Test' this way
//console.log(rest.get([1, 2]));
//need to create a variable for the array first
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading'); //object
console.log(rest);
console.log(rest.get(arr));


////////////////////////////////////////////////////////////////////
//SETS(data structure)
//a collection of unique values (can never have any duplicates)

//to create: new Set() & pass in an iterable (most common = an array)
//set can hold mixed data types (string, number, etc.)
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //duplicates are eliminated
//Set(3) {'Pasta', 'Pizza', 'Risotto'}
//just like arrays, sets are also iterables
//different from array in:
//elements are unique
//order of elements in the set is irrelevent

//strings are also iterables
console.log(new Set('Jonas'));
//Set(5) {'J', 'o', 'n', 'a', 's'}

//empty set
console.log(new Set());
//Set(0) {}

//get size of a set
console.log(ordersSet.size);

//check if a certain element is in a set
//has() is a method
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false

//add new elements to a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); //ignored, not unique
console.log(ordersSet);

//delete elements in a set
ordersSet.delete('Risotto');
console.log(ordersSet);

//retrieve values out of a set
//no indexes
//no way to get the values out
//use an array instead

//delete all of the elements of a set
//ordersSet.clear();
//console.log(ordersSet);

//loop over sets
for (const order of ordersSet) console.log(order);

//main use is to remove duplicate values of arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//want to know how many types of positions
const staffUnique = new Set(staff);
console.log(staffUnique); //waiter, chef, manager
console.log(new Set(staff).size);
//create an array from the set with spread operator
const staffUnique1 = [...new Set(staff)];
console.log(staffUnique1); //new array

//counting letters in a string
console.log(new Set('jonasschmedtmann').size);

//////////////////////////////////////////////////////////////////
// CODING CHALLENGE #2
*/
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK!!!
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
//de-structure [index, player]
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
//start with goal 1 {index + 1}

//Goal 1: Lewandowski
//Goal 2: Gnarby
//Goal 3: Lewandowski
//Goal 4: Hummels

// 2.
//calculate the average odds
const odds = Object.values(game.odds); //array of values saved to variable
let average = 0; // set average at 0
for (const odd of odds) average += odd;
average /= odds.length; //average = average/odds(number of how many)
console.log(average);

// 3.
//loop over object get array of team & odd
//with object: pass into entries function the object interested in (game.odds)
for (const [team, odd] of Object.entries(game.odds)) {
  //console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  //if team is x then result is draw else victory for {game object[property team]}
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5

// BONUS
// loop over the array, and add the array elements as object properties, and then increase the count with each new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


/////////////////////////////////////////////////////////////////////
//Looping Objects: Object Keys, values, enteries

//property names/KEYS
const properties = Object.keys(openingHours);
console.log(properties);

//original : console.log(`We are open on ${properties.length} days`);
//stored in a variable
//Property NAMES
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//without variable properties
for (const day of Object.keys(openingHours)) {
  console.log(day); //thu, fri, sat (3 keys)
}
//with variable properties
for (const day of properties) {
  console.log(day); //thu, fri, sat (3 keys)
}

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Property ENTRIES (names/key & values)
//entire object
const entries = Object.entries(openingHours);
console.log(entries);

//loop over the object
//de-structure [key, value] (use to be x)
//de-structure object of value {open, close} //use any names you want because variables
for (const [key, { open, close }] of entries) {
  //console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


///////////////////////////////////////////////////////////////////////
//Optional Chaining

//console.log(restaurant.openingHours.mon);//undefined, property does not exist
//console.log(restaurant.openingHours.mon.open);//error

//checking just one property
//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//nothing = not there

//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
//11

//gets messy and confusing
//if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
//only if the property before the ? exists then the next property will be read from there
//undefined
console.log(restaurant.openingHours?.mon?.open);
//can use the syntax on multiple properties

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  //if you want to use a variable name as the property name use [] (brackets notation)
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //day comes dynamically from the array
  //don't want undefined so set default value of closed with OR operator
  //because sat is 0 = falsy need to use nullish coalescing operator ??
  console.log(`On ${day}, we open at ${open}`); //0 is falsy value
}

//Methods with optional chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //focaccia, pasta
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //does not exist
//checks before ? if it exists, if not then (?? nullish) print the statement instead

//Arrays with optional chaining
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');
//without chaining
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//restaurant = Object Literal Syntax

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //original
  //orderDelivery: function(obj) {
  //console.log(obj);
  //},

  //destructuring
  //calling a method with an object
  //can also assign default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  //function that accepts multiple arguments
  //then use spread operator to pass those arguments
  //three ingredients
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  //new method
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/

/*
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
*/

/* 
//////////////////////////////////////////////////////////////////////
//Looping Arrays: The FOR-OF Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //SPREAD operator

for (const item of menu) console.log(item); //for , then variable, then what looping
//loops over entire array and in each iteration will give us access to the current array element which is specified as the variable (item in this case)
//still able to use continue & break

//also want current index
//call entries method
//for (const item of menu.entries()) {
//console.log(item); //now each is an array with current index & item
//}
//use this information to print a nice numbered menu
//old school way
//for (const item of menu.entries()) {
//console.log(`${item[0] + 1}: ${item[1]}`);
//}
//de-structuring (new school way)
//i = item, el = element
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//what is menu.enteries()?
//console.log(menu.entries());//array iterator {}
//console.log([...menu.entries()]); //SPREAD operator to expand and create new array
//It is an array which in each position contains a new array(containing the element and the index number of that element in the original array)

//////////////////////////////////////////////////////////////////////
//CODING CHALLENGE #1


We're building a football betting app (soccer for my American friends)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

GOOD LUCK!!!
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer', //goalkeeper
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimnich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki', //goalkeeper
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2); //seperate arrays for each team

//2.
const [gk, ...fieldPlayers] = players1; //REST syntax
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2]; //SPREAD operator
console.log(allPlayers); //one array with all players

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
//SPREAD operator(unpack array into new one and add new players)

// 5.
const {
  odds: { team1, x: draw, team2 }, //inside odds object, rename x to draw
} = game;
console.log(team1, draw, team2);
//nested destructuring

// 6. (REST syntax)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored); //use values from scored
//use SPREAD operator to unpack the values

// 7. logical operator &&
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/*
//////////////////////////////////////////////////////////////////////

//Logical Assignment Operators (ES2021)

//
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0, //falsy value so OR operator will assign 10
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//works because of short circuiting
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;

//logical assignment operator OR
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//logical nullish assignment operator (null or undefined)
//works with 0
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//works because of short circuting
//rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined
//rest2.owner = rest2.owner && '<ANONYMOUS>'; //Anonymous

//&& logical assignment operator
rest1.owner &&= '<ANONYMOUS>'; //stays same (no owner)
rest2.owner &&= '<ANONYMOUS>'; //anonymous

console.log(rest1);
console.log(rest2);

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
