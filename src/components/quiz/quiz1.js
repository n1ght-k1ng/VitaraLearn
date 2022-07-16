import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Quiz1() {
	const questions = [
		{
			questionText: 'What kind of Data Structure an Array is ?',
			answerOptions: [
				{ answerText: 'Non Linear Data Structure', isCorrect: false },
				{ answerText: 'Dynamic Data Structure', isCorrect: false },
				{ answerText: 'Linear Data Structure', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Can we allocate data to the unused part of the array?',
			answerOptions: [
				{ answerText: 'Yes , We can use the unused part of the Array', isCorrect: false },
				{ answerText: 'No , unused part of the array cannot be used ', isCorrect: true },
				
			],
		},
		{
			questionText: 'Given Array => a =[0,3,5,7,2,6]  a[3] would be ?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '6', isCorrect: false },
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
                navigate('../step2',{ replace: true })
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
                    <button onClick={onClick}>Proceed to Lecture 2 - Stack</button>
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

export default Quiz1
