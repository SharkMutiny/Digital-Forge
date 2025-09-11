const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  }

}