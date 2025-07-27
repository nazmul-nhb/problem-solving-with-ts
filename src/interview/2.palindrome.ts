import { reverseStringRaw } from './1.reverse';

export function isPalindromeRaw(str: string) {
	const reversed = reverseStringRaw(str);

	return str === reversed;
}

// export default isPalindromeRaw('hoh');
