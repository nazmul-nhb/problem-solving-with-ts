function isPalindromeRaw(str: string): boolean {
	if (!str || typeof str !== 'string') return false;

	function floor(num: number): number {
		return Number(num?.toString()?.split('.')?.[0]);
	}

	const limit = str.length;

	for (let i = 0; i <= floor(limit / 2); i++) {
		if (str[i] !== str[limit - 1 - i]) {
			return false;
		}
	}

	return true;
}

export default isPalindromeRaw('hoh');
