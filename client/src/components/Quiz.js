import React, { useState } from 'react';
//MMSE scoring
//24-30: no cognitive impairment
//18-23: mild cognitive impairment
//0-17: severe cognitive impairment
export default function Quiz() {
	const questions = [
		{
			questionText: 'What year is it? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false }, // will have to change isCorrect to checkboxIsClicked boolean, clicked add 1 point to sum
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'What season is it? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'What month is it? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'What is the date today? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'What time is it right now? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'What country are we in? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'What town/city are we in? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'What district/county are we in? (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'Where are we now, and why? (2)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: true  },
			],
		},
		{
			questionText: 'Examiner names three objects (e.g. apple, table, penny) and asks patient to repeat. 1 point for each correct answer. AFTER have the patient commit those 3 words to memory, repeating until correct. (3)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
			],
		},
		{
			questionText: 'Subtract 7 from 100, then repeat. Continue five times: 100, 93, 86, 79, 72, 65. (5)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '5', isCorrect: true },
			],
		},
		{
			questionText: 'Ask for the names of the three objects learned earlier. (3)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
			],
		},
		{
			questionText: 'Name two objects (e.g. pen, watch). (2)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: true },
			],
		},
		{
			questionText: 'Repeat "No ifs, ands, or buts". (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'Give three-stage command. 1 point per stage. (e.g. "Place index of right hand, on to your nose, then on your left ear") (3)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
			],
		},
		{
			questionText: 'Ask the patient to read and obey a written command on a piece of paper. Instruction says "Close your eyes". (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'Ask the patient to write a sentence. Must be sensible and have subject and verb. (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
		{
			questionText: 'Ask patient to copy a pair of intersecting pentagons, with two overlaps. (1)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true  },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);  //answerOptions needs category of point, since questions in order can have checkboxes that when clicked add 1 point then sum at end
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
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