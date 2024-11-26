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
				if (
					typeof module === "object" &&
					JSON.stringify(module.default) !== "{}"
				) {
					console.log(`🟢 Showing Result from ${file}`);
					console.log(module.default);
					console.log("---------------------------");
				}
				// else {
				// 	console.warn(`🚫 No default export found in ${file}!`);
				// 	console.log("---------------------------");
				// }
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
