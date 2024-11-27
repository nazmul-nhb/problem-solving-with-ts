const processMessage = (message: string): string => {
	const words = message.split(" ");

	const isValidTime = (time: string): boolean => {
		const [hours, minutes] = time.split(":").map(Number);
		return (
			Number.isInteger(hours) &&
			Number.isInteger(minutes) &&
			hours >= 0 &&
			hours <= 23 &&
			minutes >= 0 &&
			minutes <= 59
		);
	};

	const validWordsWithTimestamps = words.filter((word) => {
		const match = word.match(/\[(\d{2}:\d{2})\]/);
		return match && isValidTime(match[1]);
	});

	return validWordsWithTimestamps
		.sort((a, b) => {
			const matchA = a.match(/\[(\d{2}:\d{2})\]/);
			const matchB = b.match(/\[(\d{2}:\d{2})\]/);

			if (matchA && matchB) {
				const [hoursA, minutesA] = matchA[1].split(":").map(Number);
				const [hoursB, minutesB] = matchB[1].split(":").map(Number);

				return hoursA * 60 + minutesA - (hoursB * 60 + minutesB);
			}
			return 0;
		})
		.join(", ");
};

export default processMessage(
	"hello world coffee[25:00] meeting[09:15] chat[09:00]"
);
