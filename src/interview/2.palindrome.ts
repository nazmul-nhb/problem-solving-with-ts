import { floorNumber } from '../utils/helpers';

function isPalindromeRaw(str: string): boolean {
	if (!str || typeof str !== 'string') return false;

	const limit = str.length;

	for (let i = 0; i <= floorNumber(limit / 2); i++) {
		if (str[i] !== str[limit - 1 - i]) {
			return false;
		}
	}

	return true;
}

export default isPalindromeRaw('hoh');
