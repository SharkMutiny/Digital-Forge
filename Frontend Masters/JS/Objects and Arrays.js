
// Objects and Arrays in JavaScript
// An object is a collection of key-value pairs
// Keys are strings, values can be any type
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



