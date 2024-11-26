import { readdirSync } from "fs";
import { join } from "path";

export const logResult = (func?: () => any): void => {
	if (func) {
		const result = func();
		console.log(`🟢 Output: ${result}`);
	}
};

// Dynamically load and execute all files in the src directory
const loadModules = () => {
	console.log("🟢 Program is Running...");

	const srcDir = join(__dirname);
	const files = readdirSync(srcDir).filter(
		(file) => file.endsWith(".ts") && file !== "main.ts"
	);

	for (const file of files) {
		import(`./${file}`)
			.then((module) => {
				if (module.default) {
					console.log(`🟢 Showing Result from ${file}`);
					logResult(() => module.default);
					console.log("---------------------------");
				} else {
					console.warn(`🚫 No default export found in ${file}!`);
				}
			})
			.catch((err) => {
				if (err instanceof Error) {
					console.error(`🛑 Error in ${file}:`, err.message);
				} else {
					console.error(err);
				}
			});
	}
};

loadModules();
