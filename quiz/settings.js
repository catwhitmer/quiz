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

    async startQuiz() {
        try {
            const amount = this.startButton.getAmount();
            const categoryId = this.category.value;
            const difficulty = this.getCurrentDifficulty();

            const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
            
            let data = await this.fetchData(url);
            this.toggleVisibility;
            this.quiz = new Quiz(this.quizElement, amount, data.results);
        } catch (error) {
            alert(error);
        }
    }
}

export default Settings;