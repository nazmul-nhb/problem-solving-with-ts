const isPalindrome = (str: string): boolean => {
	// using shorthand built-in method
	// return str === str.split("").reverse().join("");

	// using loop
	const strArray = str.split("");

	for (let i = 0; i < Math.floor(strArray.length / 2); i++) {
		if (strArray[i] !== strArray[strArray.length - 1 - i]) {
			return false;
		}
	}

	return true;
};

// export default {
// 	hello: isPalindrome("hello"),
// 	madam: isPalindrome("madam"),
// 	kaakkaak: isPalindrome("kaakkaak"),
// };
