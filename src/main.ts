import { readdirSync, statSync } from 'fs';
import { basename, dirname, extname, join } from 'path';

const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
	const files = readdirSync(dirPath);

	files.forEach((file) => {
		const filePath = join(dirPath, file);
		const fileConditions =
			['.ts', '.js', '.mjs', '.cjs'].includes(extname(file)) &&
			file !== 'main.ts' &&
			file !== 'main.js';

		if (statSync(filePath).isDirectory()) {
			arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
		} else if (fileConditions) {
			arrayOfFiles.push(filePath);
		}
	});

	return arrayOfFiles;
};

const logResult = () => {
	console.log('🟢 Program is Running...');

	const files = getAllFiles(__dirname);

	for (const filePath of files) {
		const file = basename(filePath);
		const folder = dirname(filePath).split(/[/\\]/).pop();
		const displayPath = `${folder}/${file}`;

		import(filePath)
			.then((module) => {
				if ('default' in module && JSON.stringify(module.default) !== '{}') {
					console.log(`🟢 Showing Result from ${displayPath}`);
					console.log(module.default);
					console.log('---------------------------');
				}
			})
			.catch((err) => {
				if (err instanceof Error) {
					console.error(`🛑 Error in ${filePath}:`, err.message);
					console.log('---------------------------');
				} else {
					console.error(err);
					console.log('---------------------------');
				}
			});
	}
};

logResult();
