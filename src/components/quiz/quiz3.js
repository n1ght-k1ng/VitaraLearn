import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Quiz3() {
	const questions = [
		{
			questionText: 'What operation is used to enter an element in queue?',
			answerOptions: [
				{ answerText: 'dequeue()', isCorrect: false },
				{ answerText: 'enter()', isCorrect: false },
				{ answerText: 'enqueue()', isCorrect: true },
				{ answerText: 'insert()', isCorrect: false },
			],
		},
		{
			questionText: 'What function is used to view the front element?',
			answerOptions: [
				{ answerText: 'remove()', isCorrect: false },
				{ answerText: 'peek()', isCorrect: true },
				{ answerText: 'delete()', isCorrect: false },
				{ answerText: 'disappear()', isCorrect: false },
			],
		},
		{
			questionText: 'Queue Data structure follows which principle?',
			answerOptions: [
				{ answerText: 'FIFO', isCorrect: true },
				{ answerText: 'LIFO', isCorrect: false },
				{ answerText: 'NONE', isCorrect: false },
				
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
                navigate('../step4',{ replace: true })
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
                    <button onClick={onClick}>Proceed to Lecture 4 - Linked List </button>
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

export default Quiz3