// Exercise - Improve your project with knowledge of Loops
// const prompt = require("prompt-sync")()

var database = [
    {
        username: "wit",
        password: "storytime",
    },
    {
        username: "kal",
        password: "iheartsyl",
    },
    {
        username: "teft",
        password: "grumblegrumble",
    },
    {
        username: "adolin",
        password: "lookatme",
    },
];

var newsFeed = [
    {
        username: "Ricky-Bobby",
        timeline: "If you ain't first, your last",
    },
    {
        username: "Arnold",
        timeline: "Sully? I left him go.",
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {
        if(isUserValid(username, password)) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username or password")
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// function signIn(user, pass) {
//     if (user === database[0].username && pass === database[0].password) {
//         console.log(newsFeed)
//     } else {
//         alert("Sorry, wrong username or password!")
//     }
// };

signIn(userNamePrompt, passwordPrompt);