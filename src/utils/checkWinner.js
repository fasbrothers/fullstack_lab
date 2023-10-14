const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export function checkWinner(boxes) {
	for (const [first, second, third] of winningCombinations) {
		if (
			boxes[first] &&
			boxes[first] === boxes[second] &&
			boxes[first] === boxes[third]
		) {
			return boxes[first];
		}
	}

	return '';
}
