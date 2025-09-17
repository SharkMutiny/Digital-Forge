const questions = [
{
  category: "JavaScript",
  question: "Which keyword is used to declare a variable in JavaScript?",
  choices: ["let", "const", "All of the above"],
  answer: "All of the above",
},
{
  category: "HTML",
  question: "What does HTML stand for?",
  choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language"
    ],
  answer: "Hyper Text Markup Language",
},
{
  category: "CSS",
  question: "Which CSS property is used to change text color?",
  choices: ["font-style", "color", "background-color"],
  answer: "color",
},
{
  category: "General Knowledge",
  question: "What is the capital city of Australia?",
  choices: ["Sydney", "Melbourne", "Canberra"],
  answer: "Canberra",
},
{
  category: "Math",
  question: "What is the square root of 144?",
  choices: ["11", "12", "13"],
  answer: "12",
},
];

function getRandomQuestion(questions) {
  let randomIndex = Math.floor(Math.random() * questions.length)
  return questions[randomIndex]
}

let whichQuestion = getRandomQuestion(questions)
let someChoices = whichQuestion.choices

function getRandomComputerChoice(someChoices) {
  let randomChoice = Math.floor(Math.random() * someChoices.length)
  return someChoices[randomChoice]
}

let whichChoice = getRandomComputerChoice(someChoices)

function getResults(whichQuestion, whichChoice) {
  if (whichChoice === whichQuestion.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${whichQuestion.answer}`
  }
}