const factorial = (number: number): number | never => {
	if (number <= 0) {
		throw new Error("Operation Not Allowed!")
	}

	let result = 1;

	for (let i = number; i >= 1; i--) {
		result *= i;
	}

	return result;
};

// export default factorial(5); // 120
