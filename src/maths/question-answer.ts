// দুই ঘণ্টার একটি ভর্তি পরীক্ষায় ৫০ টি গণিত প্রশ্ন এবং ৫০ টি বাংলা প্রশ্ন ছিল। একজন পরীক্ষার্থী সবগুলো প্রশ্নের উত্তর দেয় এবং একটি গণিত প্রশ্নের উত্তর দিতে যত সময় ব্যয় করে, একটি বাংলা প্রশ্নের উত্তর দিতে তার এক-তৃতীয়াংশ সময় ব্যয় করে। গণিত প্রশ্নের উত্তর দিতে সে মোট কত মিনিট সময় ব্যয় করেছিল?

type TimeFor = "math" | "bangla";

/**
 * Calculate the time spent on Math or Bangla questions in an exam.
 *
 * @param math - Number of math questions.
 * @param bangla - Number of Bangla questions.
 * @param timeFor - Whether to calculate time for `math` or `bangla`.
 * @param totalTime - Total time available for the exam in minutes. `default: 120`
 * @returns Time spent on the specified question type as a formatted string.
 */
const getTimeTakenToAnswer = (
	math: number,
	bangla: number,
	timeFor: TimeFor,
	totalTime: number = 120
): string => {
	const timePerMathQuestion = totalTime / (math + bangla / 3);

	const timeSpent =
		timeFor === "math"
			? math * timePerMathQuestion
			: bangla * (timePerMathQuestion / 3);

	return `Took ${timeSpent.toFixed(2)} minutes to answer ${timeFor}`;
};

export default getTimeTakenToAnswer(40, 60, "math");
