let readlineSync = require('readline-sync');
let studentArray = []
let highestTotalMarks = { name: "", score: 0, averageScore: 0 }
// console.log(highestTotalMarks.score)

for (i = 0; i < 3; i++) {
  let name = readlineSync.question("What is your name ? ")
  let unitTestMarks = readlineSync.question("How much marks you got in unit test ? ")
  let preFinalMarks = readlineSync.question("How much marks you got in pre final test ? ")
  let finalMarks = readlineSync.question("What is your final marks ? ")
  let totalMarks = parseFloat(unitTestMarks) + parseFloat(preFinalMarks) + parseFloat(finalMarks)

  studentArray.push(
    {
      "name": name,
      "unitTestMarks": unitTestMarks,
      "preFinalMarks": preFinalMarks,
      "finalMarks": finalMarks,
      "totalMarks": totalMarks,
      "averageMarks": Math.trunc(totalMarks / 3)
    }
  )
  // console.log(studentArray)
  // console.log(studentArray[0].totalMarks)

  if (studentArray[i].totalMarks > highestTotalMarks.score) {
    highestTotalMarks = {
      name: studentArray[i].name,
      score: studentArray[i].totalMarks,
      averageScore: studentArray[i].averageMarks
    }
  }
  console.log(highestTotalMarks)

}

console.log("------------------------------------------------------")
console.log(`${highestTotalMarks.name} has maximum total marks : ${highestTotalMarks.score} with average score : ${highestTotalMarks.averageScore}`);
console.log("------------------------------------------------------")

// console.log(studentArray)

// name, 
// unit test marks, 
// pre final marks, 
// final marks 

// of 5 students

// then print who has the highest marks.