const sumOfDigits = (number: number): number => {
	const strNumArray = number.toString().split("");

	// using reduce method
	// return strNumArray.reduce((acc, val) => acc + Number(val), 0);

	// using loop
	let sum = 0;

	for (const num of strNumArray) {
		sum += Number(num);
	}

	return sum;
};

// export default sumOfDigits(567);
