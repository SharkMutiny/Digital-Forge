// Use Functions to check Drivers Age Exercise

// Exercise 1 - Function Declaration

function checkDriversAge() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are to young to drive this car.  Powering off.");
	} else if (Number(age) > 18) {
		alert("Powering on, Enjoy your ride!");
	} else if (Number(age) === 18) {
		alert("Congratulation on your first year of driving. Enjoy the ride!");
	}
}



// Exercise 2 - Function Expression

var checkDriversAge2 = function() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are to young to drive this car.  Powering off.");
	} else if (Number(age) > 18) {
		alert("Powering on, Enjoy your ride!");
	} else if (Number(age) === 18) {
		alert("Congratulation on your first year of driving. Enjoy the ride!");
	}
}



// Bonus - Don't use prompt() - use console.log() instead
// make the checkDriverAge() function accept an argument of age
// so you can use checkDriverAge(42)

function checkDriversAge(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are to young to drive this car.  Powering off.");
	} else if (Number(age) > 18) {
		alert("Powering on, Enjoy your ride!");
	} else if (Number(age) === 18) {
		alert("Congratulation on your first year of driving. Enjoy the ride!");
	}
}