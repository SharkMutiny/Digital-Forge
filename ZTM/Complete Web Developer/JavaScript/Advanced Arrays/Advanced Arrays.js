// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const excitedUsernames = [];
array.forEach(arr => {
    excitedUsernames.push(arr.username + "!")
})
// console.log('forEach', excitedUsernames);

// Using destructuring and single line arrow function
const excitedUsernames2 = [];
array.forEach(({username}) => excitedUsernames2.push(username + "!"));
// console.log('forEach with destructuring', excitedUsernames2);



//Create an array using map that has all the usernames with a "? to each of the usernames
const questionUsernames = array.map(arr => {
    return arr.username + "?"
})
// console.log('map', questionUsernames);

// Using destructuring and single line arrow function
const questionUsernames2 = array.map(({username}) => username + "?");
// console.log('map with destructuring', questionUsernames2);



//Filter the array to only include users who are on team: red
const redUsers = array.filter(arr => {
    return arr.team === "red"
})
// console.log('filter', redUsers)

// Using destructuring and single line arrow function
const redUsers2 = array.filter(({team}) => team === "red")
// console.log('filter with destructuring', redUsers2)



//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, arr) => {
  return acc + arr.score
}, 0)
// console.log('reduce', totalScore);

// Using destructuring and single line arrow function
const totalScore2 = array.reduce((acc, {score}) => acc + score, 0)
// console.log('reduce with destructuring', totalScore2);



// (1), what is the value of i?   -  The index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})
// solution: remove alert and console.log, now it's pure.



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const userItems = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!"
  })
  return user;
})
// console.log('bonus', userItems);