export const declOfNumber = (number: number, titles: [string, string]): string => {
	let n = Math.abs(number);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return titles[1];
	}
	n %= 10;
	if (n === 1) {
		return titles[0];
	}
	return titles[1];
};
