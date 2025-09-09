// Exercise - Build a facebook like with login, database and newsFeed

var database = [
    {
        username: "shark",
        password: "123456",
    },
];

var newsFeed = [
    {
        username: "Ricky-Bobby",
        timeline: "If you ain't first, your last",
    },
    {
        username: "Arnold",
        timeline: "Sully? I let him go.",
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed)
    } else {
        alert("Sorry, wrong username or password!")
    }
};

signIn(userNamePrompt, passwordPrompt);