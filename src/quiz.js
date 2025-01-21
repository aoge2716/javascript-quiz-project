class Quiz {
    // YOUR CODE HERE:
    //
    constructor(questions, timeLimit, timeRemaining) {
        // array of Question objects
        this.questions = questions;
        // numbers
        this.timeLimit = timeLimit;
        // numbers
        this.timeRemaining = timeRemaining;

        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    };

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    };

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    };

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i >= 0; i--) {
            let rand = Math.floor(Math.random() * i + 1);
            [this.questions[i], this.questions[rand]] = [this.questions[rand], this.questions[i]]
        }
    }

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        }
        return true;
    }

    filterQuestionsByDifficulty(difficulty){
        this.questions = this.questions.filter(function (question) {
            return question.difficulty === difficulty;
        });
    }
    averageDifficulty() {
  if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
    return "Invalid difficulty! Please provide a number between 1 and 3.";
}

const filteredQuestions = this.questions.filter(question => question.difficulty === difficulty);

if (filteredQuestions.length === 0) {
    return 0;
}

const totalDifficulty = filteredQuestions.reduce((sum, question) => sum + question.difficulty, 0);

return totalDifficulty / filteredQuestions.length;
    }
}

// testing
const questions = [
    {
      text: "Question 1",
      choices: ["a", "b", "c"],
      answer: "a",
      difficulty: 1,
    },
    {
      text: "Question 2",
      choices: ["d", "e", "f"],
      answer: "d",
      difficulty: 2,
    },
    {
      text: "Question 3",
      choices: ["g", "h", "i"],
      answer: "g",
      difficulty: 2,
    },
    {
      text: "Question 4",
      choices: ["j", "k", "l"],
      answer: "j",
      difficulty: 3,
    },
];

const quiz = new Quiz(questions, "test", 60);


// console.log("BEFORE: ", quiz.questions)
quiz.filterQuestionsByDifficulty("foo")

// console.log("AFTER: ", quiz.questions)
console.log([questions[1], questions[2]])
console.log(quiz.questions)
// console.log(questions[1])
console.log(quiz.questions==[questions[1], questions[2]])
// console.log([1,2,3].includes(1))
