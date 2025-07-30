/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param num A numeric expression
 */
export function floorNumber(num: number): number {
	return Number(splitString(num?.toString(), '.')?.[0]);
}

/**
 * Split a string into substrings using the specified separator (single character) and return them as an array.
 * @param str A string to split.
 * @param splitBy A string that identifies a character to use in separating the string. If omitted, a single-element array containing the entire string is returned.
 */
export function splitString(str: string, splitBy: string): string[] {
	const length = str.length;

	const result: string[] = [];

	let i = 0,
		part = '';

	while (i <= length - 1) {
		if (str[i] !== splitBy) {
			part += str[i];
		}

		if (str[i] === splitBy) {
			result.push(part);
			part = '';
		} else if (str[length - 1] === str[i]) {
			result.push(part);
		}

		i++;
	}

	return result;
}
