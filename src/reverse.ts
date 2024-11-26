const reverseString = (str: string): string => {
	// shorthand built-in method
	return str.split("").reverse().join("");
};

export default reverseString("hello");
