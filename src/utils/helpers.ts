/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param num A numeric expression
 */
export function floorNumber(num: number): number {
	return Number(splitString(`${num}`, '.')?.[0]);
}

/**
 * Split a string into substrings using the specified separator (single character) and return them as an array.
 * @param str A string to split.
 * @param splitBy - The character to split by (must be a single character).
 */
export function splitString(str: string, splitBy: string): string[] {
	const result: string[] = [];
	let part = '';

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (char === splitBy) {
			result.push(part);
			part = '';
		} else {
			part += char;
		}
	}

	result.push(part);

	return result;
}
