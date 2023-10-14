import { useState } from 'react';
import { Board } from './components/Board';

export default function TicTacToe() {
	const [gameBoard, setGameBoard] = useState([Array(9).fill('')]);
	const [currentStep, setCurrentStep] = useState(0);

	const gameState = {
		gameBoard,
		currentStep,
	};

	const turnForX = currentStep % 2 === 0;
	const currentSquares = gameBoard[currentStep];

	const makeMove = updatedSquares => {
		setGameBoard([
			...gameState.gameBoard.slice(0, gameState.currentStep + 1),
			updatedSquares,
		]);
		setCurrentStep(gameState.currentStep + 1);
	};

	const resetGame = () => {
		setGameBoard([Array(9).fill('')]);
		setCurrentStep(0);
	};

	return (
		<div className='m-auto h-screen w-full sm:w-1/2 text-center flex flex-col items-center justify-center'>
			<Board makeMove={makeMove} turnForX={turnForX} boxes={currentSquares} />
			<button
				className='mt-10 py-3 px-10 bg-gray-500 text-white text-xl rounded-xl font-semibold hover:text-gray-600 hover:bg-white duration-200 border-2 border-gray-500'
				onClick={resetGame}
			>
				Reset
			</button>
		</div>
	);
}
