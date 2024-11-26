const countVowels = (str: string): number => {
	let count = 0;

	for (const letter of str.split("")) {
		if ("aeiou".includes(letter)) {
			count++;
		}
	}

	return count;
};

export default countVowels("mmm");
