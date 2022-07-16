import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Quiz5() {
	const questions = [
		{
			questionText: 'The topmost node in a tree is called ',
			answerOptions: [
				{ answerText: 'Child node', isCorrect: false },
				{ answerText: 'Parent node', isCorrect: false },
				{ answerText: 'Root Node', isCorrect: true },
				{ answerText: 'Leaf node', isCorrect: false },
			],
		},
		{
			questionText: 'The link between two nodes is called',
			answerOptions: [
				{ answerText: 'Connection', isCorrect: false },
				{ answerText: 'Edge', isCorrect: true },
				{ answerText: 'Node link', isCorrect: false },
				
			],
		},
		{
			questionText: 'Network routing algorithms use which kind of data structure?',
			answerOptions: [
				{ answerText: 'Tree', isCorrect: true },
				{ answerText: 'Stack', isCorrect: false },
				{ answerText: 'Linked List', isCorrect: false },
				{ answerText: 'Array', isCorrect: false },
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
                navigate('../form',{ replace: true })
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
                    <button onClick={onClick}>Congratulations - Collect your Certificate here </button>
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

export default Quiz5