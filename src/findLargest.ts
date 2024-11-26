const findLargest = (numbers: number[]): number => {
	// using built-in array methods
	// const sortedArray = numbers.sort((a, b) => b - a);
	// return sortedArray[0];

	// using loop
	let largest = numbers[0];

	for (const number of numbers) {
		if (number > largest) {
			largest = number;
		}
	}

	return largest;
};

export default findLargest([3, 1, 4, 1, 5, 9]);
