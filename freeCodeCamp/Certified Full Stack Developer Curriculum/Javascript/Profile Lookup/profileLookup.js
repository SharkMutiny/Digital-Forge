let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  if (contacts.find(obj => obj.firstName === name) && contacts.find(obj => obj.hasOwnProperty(prop))) {
    return contacts.find(obj => obj.firstName === name)[prop]
  } else if (!contacts.find(obj => obj.firstName === name)) {
    return "No such contact"
  } else {
    return "No such property"
  }
}

console.log(lookUpProfile("Akira", "lastName"))
