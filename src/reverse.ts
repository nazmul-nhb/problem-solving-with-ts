const reverseString = (str: string): string => {
	// using built-in method
	// return str.split("").reverse().join("");

	// using loop

	const letters = str.split("");

	const reversed: string[] = [];

	for (const letter of letters) {
		reversed.unshift(letter);
	}

	return reversed.join("");
};

export default reverseString("hello");
