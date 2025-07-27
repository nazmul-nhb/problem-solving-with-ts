function reverseStringRaw(str: string): string {
	if (!str || typeof str !== 'string') return '';

	if (str.length === 1) return str;

	let result = '';

	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}

	return result;
}

export default reverseStringRaw('bangladesh');
