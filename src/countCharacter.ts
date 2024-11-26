const countCharacter = (str: string, char: string): number => {
	let count = 0;

	for (const letter of str) {
		if (str.includes(char)) {
			if (letter.toLowerCase() === char.toLowerCase()) {
				count++;
			}
		}
	}

	return count;
};

// export default countCharacter("hello world", "l"); // 3
