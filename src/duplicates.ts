const removeDuplicates = <T extends number>(numbers: T[]): T[] => {
	const filteredArray: T[] = [];

	for (const number of numbers) {
		if (!filteredArray.includes(number)) {
			filteredArray.push(number);
		}
	}

	return filteredArray;
};

// export default removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
