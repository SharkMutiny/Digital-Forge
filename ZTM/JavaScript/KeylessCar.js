// else if statement excersise (pretend you a keyless car)

var age = prompt("What is your age?");

if (Number(age) < 18) {
    alert("Sorry, you are to young to drive this car.  Powering off.");
} else if (Number(age) > 18) {
    alert("Powering on, Enjoy your ride!");
} else if (Number(age) === 18) {
    alert("Congratulation on your first year of driving. Enjoy the ride!");
}