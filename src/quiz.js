class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining){
        // array of Question objects
        this.questions = questions;
        // numbers
        this.timeLimit = timeLimit;
        // numbers
        this.timeRemaining = timeRemaining;

        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    };

    getQuestion(){
        return this.questions[this.currentQuestionIndex];
    };
    
    moveToNextQuestion(){
        this.currentQuestionIndex++;
    };

    shuffleQuestions(){
        for(let i=this.questions.length-1; i>=0; i--){
            let rand = Math.floor(Math.random()* i+1);
            [this.questions[i],this.questions[rand]] = [this.questions[rand],this.questions[i]] 
        }
    }

    checkAnswer(answer){
        if(answer === this.questions[this.currentQuestionIndex].answer){
            this.correctAnswers++;
        }
    }

    hasEnded(){
        if(this.currentQuestionIndex < this.questions.length){
            return false;
        }
        return true;
    }

filterQuestionsByDifficulty(difficulty){
    this.questions = this.questions.filter(function (question) {
        return question.difficulty === difficulty;
    });
}

    averageDifficulty(){
        let totalDifficulty = 0;
        this.questions.forEach(question => {
            totalDifficulty += question.difficulty;
        });
        return totalDifficulty / this.questions.length;
    }
}
