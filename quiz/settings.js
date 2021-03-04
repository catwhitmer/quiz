class Settings {
    constructor() {  
        this.quizElement = document.querySelector('.quiz');
        this.settingsElement = document.querySelector('.settings'); 
        this.category = document.querySelector('#category');
        this.numberOfQuestions = document.querySelector('#questions');
        this.difficulty = [
            document.querySelector('#easy'),
            document.querySelector('#medium'),
            document.querySelector('#hard'),
        ];
        this.startButton = document.querySelector('#start');

        this.quiz = {};

        this.startButton.addEventListener('click', this.startQuiz.bind(this));
    }

    startQuiz() {
        
    }
}

export default Settings;