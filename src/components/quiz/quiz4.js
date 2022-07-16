import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Quiz4() {
	const questions = [
		{
			questionText: 'Head pointer stores the ______ of the Linked List',
			answerOptions: [
				{ answerText: 'ending', isCorrect: false },
				{ answerText: 'middle part ', isCorrect: false },
				{ answerText: 'beginning', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Linked List is a dynamic data structure. True or false?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
		{
			questionText: 'When the last node of a linkedlist is linked to the first node?',
			answerOptions: [
				{ answerText: 'It is called an Circular linked list', isCorrect: true },
				{ answerText: 'It is called a Doubly linked list', isCorrect: false },
				{ answerText: 'It is called a Singly linked list', isCorrect: false },
				{ answerText: 'None of the above answers are correct', isCorrect: false },
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
                navigate('../step5',{ replace: true })
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
                    <button onClick={onClick}>Proceed to Lecture 5 - Trees</button>
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

export default Quiz4