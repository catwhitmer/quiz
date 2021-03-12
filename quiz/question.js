class Question {
    constructor(question) {
      this.correctAnswer = question.correct_answer;
      this.question = question.question;
      this.answers = this.shuffleAnswers([
        question.correct_answer,
        ...question.incorrect_answers
      ]);
    }
    shuffleAnswers(answers) {
    }
    
    answer(checkedElement) {
    }
    render() {
    }
  }
  export default Question;