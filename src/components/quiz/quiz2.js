import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Quiz2() {
	
	const questions = [
		{
			questionText: 'What function is used to add a new element in stack?',
			answerOptions: [
				{ answerText: 'add', isCorrect: false },
				{ answerText: 'pop', isCorrect: false },
				{ answerText: 'push', isCorrect: true },
				{ answerText: 'pressure', isCorrect: false },
			],
		},
		{
			questionText: 'What function is used to remove a new element in stack?',
			answerOptions: [
				{ answerText: 'remove', isCorrect: false },
				{ answerText: 'nullify', isCorrect: false },
				{ answerText: 'pop', isCorrect: true },
				{ answerText: 'eject', isCorrect: false },
			],
		},
		{
			questionText: 'Stack Data Structure follows which principle',
			answerOptions: [
				{ answerText: 'LIFO', isCorrect: true },
				{ answerText: 'FIFO', isCorrect: false },
				{ answerText: 'TIFO', isCorrect: false },
				
			],
		},
		
	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    const navigate = useNavigate()
    const onClick= () => {
                navigate('../step3',{ replace: true })
    }
	return (

        
		<div className='quiz'>
            <div class="open">
          <div class="layer"></div>
          <div class="layer"></div>
    
      </div>
			{showScore ? (
                
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <button onClick={onClick}>Proceed to Lecture 3 - Queues</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz2