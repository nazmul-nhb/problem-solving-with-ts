import { readdirSync } from "fs";
import { join } from "path";

const logResult = () => {
	console.log("🟢 Program is Running...");

	const srcDir = join(__dirname);
	const files = readdirSync(srcDir).filter(
		(file) => file.endsWith(".ts") && file !== "main.ts"
	);

	for (const file of files) {
		import(`./${file}`)
			.then((module) => {
				const result = module.default;

				if (
					result &&
					result != null &&
					typeof result !== "undefined" &&
					JSON.stringify(result) !== "{}"
				) {
					console.log(`🟢 Showing Result from ${file}`);
					console.log(result);
					console.log("---------------------------");
				} else {
					console.warn(`🚫 No default export found in ${file}!`);
					console.log("---------------------------");
				}
			})
			.catch((err) => {
				if (err instanceof Error) {
					console.error(`🛑 Error in ${file}:`, err.message);
					console.log("---------------------------");
				} else {
					console.error(err);
					console.log("---------------------------");
				}
			});
	}
};

logResult();
