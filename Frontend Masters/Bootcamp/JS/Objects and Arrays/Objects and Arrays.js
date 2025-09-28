
// Objects and Arrays in JavaScript

// An object is a collection of key-value pairs
// Keys are strings, values can be any type
// objects are unordered

// key: value,
// name: "Simon Bradley",

// object denoted by curly braces {}
const person = {
  name: "Simon Bradley",
  city: "Melbourne",
  state: "VIC",
  favoriteFood: "🍣",
  wantsSushiRightNow: true,
  numberOfSushiWanted: 10,
};
console.log(person);
console.log(person.name); // Dot notation (preferred syntax)
console.log(person["name"]);


// Example function that uses an object as an argument
const person1 = {
  name: "Simon",
  ageRange: "35-45"
};
const person2 = {
  name: "Mark",
  ageRange: "65-75"
};

function suggestMusic(person) {
  if (person.ageRange === "35-45") {
    console.log("We think you'll like Blink-182 you crazy millennial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He hurt himself today."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}
suggestMusic(person1);
suggestMusic(person2);


// Objects can also contain functions as values
// When a function is a value in an object, it's called a method
const dog = {
  name: "Momo",
  speak() {
    console.log("woof woof");
  }
};
dog.speak();


// Objects can contain other objects (nested objects)
const me = {
  name: {
    first: "Simon",
    last: "Bradley"
  },
  location: {
    city: "Melbourne",
    state: "VIC",
    country: "Australia"
  }
};

console.log(me); // Log the whole object
console.log(me.name.first); // Dot notation to access nested values


// Example method that uses "this" to access properties on the same object
// "this" refers to the object that the method is a property of
// "this" is complicated, but in this case it will always refer to the object
const contextOfThis = {
  name: {
    first: "Simon",
    last: "Bradley"
  },
  location: {
    streetNumber: 666,
    street: "notRealStreet",
    city: "Melbourne",
    state: "VIC",
    zipCode: 3000,
    country: "Australia"
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  }
};

console.log(me.getAddress());



// An array is an ordered list of values
// Arrays are denoted by square brackets []
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]); // Arrays are zero-indexed, so the first item is at index 0
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);


// Common array methods 
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length); // Get the number of items in the array  (this one = 8 (0-7))
console.log(primeNumbers.join(" | ")); // Join all the items in the array into a single string, with " | " between each item  (if left blank, defaults to comma)



// Arrays can contain any type of value, including objects and other arrays
const courses = [
  { teacher: "Kyle Simpson", course: "JS Function Lite" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React v3" },
  { teacher: "Steve Kinney", course: "State Management" }
];

courses.push({ teacher: "Sean Larkin", course: "Webpack" }); // Add a new item to the end of the array


console.log(courses);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };

console.log(courses);



// Looping over arrays
// There are many ways to loop over arrays, here are two common methods to do it
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function(city) {
  console.log(city);
});



