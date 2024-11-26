const fizzBuzz = (number: number): string => {
	const draft: (number | "Fizz" | "Buzz")[] = [];

	for (let i = 1; i <= number; i++) {
		if (i % 3 !== 0 && i % 5 !== 0) {
			draft.push(i);
		}
		if (i % 3 === 0) {
			draft.push("Fizz");
		}
		if (i % 5 === 0) {
			draft.push("Buzz");
		}
	}

	return draft.join(", ");
};

// export default fizzBuzz(10);
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz
