// App that can calculate the average of the class scores, grade scores, pass or fail students and message results to students

function getAverage(allScores) {
  let sum = 0

  for (const score of allScores) {
    sum += score
  }
  return sum / allScores.length
}

function getGrade(studentScore) {
  if (studentScore === 100) {
    return "A+"
  } else if (studentScore >= 90) {
    return "A"
  } else if (studentScore >= 80) {
    return "B"
  } else if (studentScore >= 70) {
    return "C"
  } else if (studentScore >= 60) {
    return "D"
  } else {
    return "F"
  }
}

function hasPassingGrade(studentScore) {
  return getGrade(studentScore) !== "F"
}

function studentMsg(allScores, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${getAverage(allScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
  } else {
    return `Class average: ${getAverage(allScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))