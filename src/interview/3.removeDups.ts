// Remove Duplicates from a String

function removeDuplicatesRaw(str: string): string {
	if (!str || typeof str !== 'string') return '';

	let result = '';

	for (let i = 0; i <= str.length - 1; i++) {
		let isDuplicate = false;

		for (let j = 0; j <= result.length - 1; j++) {
			if (str[i] === result[j]) {
				isDuplicate = true;
			}
		}

		if (!isDuplicate) {
			result += str[i];
		}
	}

	return result;
}

export default removeDuplicatesRaw('abracadabra');
