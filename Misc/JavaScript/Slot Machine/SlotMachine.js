// Build a SLot Machine Exercise
// Requirements
// 1. User deposit some money
// 2. Select number of lines bet will be made on
// 3. Charge bet amount
// 4. Run / Spin the machine
// 5. Check lines to see if user won
// 6. Give winnings to user
// 7. Repeat / Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.")
    } else {
        return numberDepositAmount;
    }
}
};

const getNumberOfLines = () => {
    while (true) {
    const lines = prompt("Enter amount of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log("Invalid number of lines, try again.")
    } else {
        return numberOfLines;
    }
}
};

const getBet = (balance, lines) => {
    while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid bet, try again.")
    } else {
        return numberBet;
    }
}
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
