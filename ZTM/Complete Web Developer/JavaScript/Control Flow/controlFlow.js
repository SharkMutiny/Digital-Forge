//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

let experiencePoints = winBattle() ? 10: 1;



//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// Answer: undefined (because there is no assignment before the break statement)

//#3 return value when moveCommand("back");
// Answer: "you arrived home" (the extra break statement is unreachable but does not affect the output)

//#4 return value when moveCommand("right");
// Answer: "you found a river" (the return statement exits the function immediately)

//#5 return value when moveCommand("left");
// Answer: undefined (because there is no assignment before the break statement)

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function weatherReport(weather) {
    var report;
    switch (weather) {
        case "sunny":
            report = "It's a bright and sunny day!";
            break;
        case "rainy":
            report = "Don't forget your umbrella, it's raining!";
            break;
        case "cloudy":
            report = "It's a bit gloomy with all the clouds.";
            break;
        case "snowy":
            report = "Time to build a snowman, it's snowy!";
            break;
        default:
            report = "Weather type not recognized.";
    } 
    return report;
}

