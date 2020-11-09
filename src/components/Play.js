import { Component } from 'react'
import AutoFixIcon from 'mdi-react/AutoFixIcon';
import questions from '../questions.json'

class Play extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            prevQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            scrore: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFifyFifty: false,
            time: {}
        }
    }

    displayQuestion = () => {

    }
    render() {
        console.log(questions)
        return (
            <div className='question'>
                <div className='lifeline-container'>
                    <div>
                        <AutoFixIcon size={24}/><span>2</span>
                    </div>
                    <div>
                        <AutoFixIcon size={24}/><span>5</span>
                    </div>
                </div>
                <div className='lifeline-container'>
                    <p>1 of 15</p>
                    <p>3:25</p>
                </div>
                <h5>{this.state.questions[0].question}</h5>
                <div className='options-container'>
                    <p className='option'>{this.state.questions[0].optionA}</p>
                    <p className='option'>{this.state.questions[0].optionB}</p>
                    <p className='option'>{this.state.questions[0].optionC}</p>
                    <p className='option'>{this.state.questions[0].optionD}</p>
                </div>
                <div className='button-container'>
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
            </div>
        )
    }
}

export default Play