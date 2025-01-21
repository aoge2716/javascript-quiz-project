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

    filterQuestionsByDifficulty(diff){
        if([1,2,3].includes(diff)){            
            this.questions = this.questions.filter(el=>el.difficulty === diff);
            return this.questions;
        }
    }

    averageDifficulty() {
        const totalDifficulty = this.questions.reduce((sum, question) => sum + question.difficulty, 0);
        return totalDifficulty / this.questions.length;
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
quiz.filterQuestionsByDifficulty(2)


// console.log("AFTER: ", quiz.questions)
// console.log([questions[1], questions[2]])
// console.log(quiz.questions)
// console.log(questions[1])
console.log(quiz.questions==[questions[1], questions[2]])
// console.log([1,2,3].includes(1))
