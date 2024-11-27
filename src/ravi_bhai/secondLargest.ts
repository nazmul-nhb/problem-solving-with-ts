const findSecondLargest = <T extends number>(numbers: T[]): T | null => {
	// using built in method
	// const sortedArray = numbers.sort((a, b) => b - a);

	// return sortedArray[1];

	// using loop
	let largest: T | null = null;
	let secondLargest: T | null = null;

	for (const number of numbers) {
		if (largest === null || number > largest) {
			secondLargest = largest;
			largest = number;
		} else if (
			secondLargest === null ||
			(number > secondLargest && number !== largest)
		) {
			secondLargest = number;
		}
	}

	return secondLargest;
};

// export default findSecondLargest([3, 1, 4, 1, 52, 9]);
