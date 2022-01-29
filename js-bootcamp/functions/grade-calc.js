// students score, total possible score
// generate letter grade and percentage
// 15/20 --> You got a C (75%)!
// A 90-100, B 88-89, C 70-79, D 60-69, F 0-59

let testScore = function (correct, totalAnswers) {
    let grade = (correct / totalAnswers)* 100;
    
    let letter;
    if (grade >= 90){
        letter = 'A'
    } else if (grade >= 80) {
        letter = 'B'
    } else if (grade >= 70) {
        letter = 'C'
    } else if (grade >=60) {
        letter = 'D'
    } else {
        letter = 'F'
    }
    return `You got a ${letter} on the test with a score of ${grade}`
}

console.log(testScore(75,100))
