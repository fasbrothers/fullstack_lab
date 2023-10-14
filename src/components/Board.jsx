import { checkWinner } from '../utils/checkWinner';

export function Board({ turnForX, boxes, makeMove }) {
	const winner = checkWinner(boxes);

	const isBoardFull = boxes.every(box => box !== '');

	const condition = winner
		? `Winner: ${winner}`
		: isBoardFull
		? 'Draw'
		: `Current player: ${turnForX ? 'X' : 'O'}`;

	const handleClick = i => {
		if (boxes[i] || winner) return;

		const nextBoxes = boxes.slice();
		nextBoxes[i] = turnForX ? 'X' : 'O';
		makeMove(nextBoxes);
	};

	return (
		<>
			<h2 className='text-3xl font-medium mb-3'>TIC TAC TOE</h2>
			<h4
				className={`mb-10 font-bold text-2xl ${
					winner
						? 'text-green-500'
						: isBoardFull
						? 'text-blue-400'
						: 'text-gray-600'
				} `}
			>
				{condition}
			</h4>
			<div className='h-[300px] sm:h-[360px] w-[300px] sm:w-[360px] mx-auto grid grid-cols-3 grid-row-3 gap-2 text-gray-600'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
					<button
						key={i}
						className='border border-slate-500 text-3xl font-bold outline-none cursor-pointer sm:h-[120px] hover:bg-slate-200 duration-200 hover:scale-95'
						onClick={() => handleClick(i)}
					>
						{boxes[i]}
					</button>
				))}
			</div>
		</>
	);
}
