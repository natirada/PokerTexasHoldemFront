const fs = require('fs');
const { promisify } = require('util');
const asyncReadFile = promisify(fs.readFile);
const asyncWriteFile = promisify(fs.writeFile);
const asyncGetFilesInDirectory = promisify(fs.readdir);

// Utility to inject all svg weather file imports.

async function main() {
	const injectionTarget = '/*#GET_ICON_IMPORTS#*/';
	const targetFilePath = `${__dirname}/target.js`;

	const cardsFiles = await asyncGetFilesInDirectory(
		`${__dirname}/cards`,
		'utf8'
	);

	const parseCardsFiles = cardsFiles.map(card => {
		const [prefix, suffix] = card.split('.');
		return `import ${prefix} from './cards/${card}`;
	});
	console.log('parseCardsFiles', parseCardsFiles);
	// const transformedIconFiles = cardsFiles.map(fileName => {
	// 	[_, code, type] = lineTemplate.exec(fileName);
	// 	const codeType = `${code}_${type}`;
	// 	codeTypes.push(`Icon${codeType}`);

	// 	return `import Icon${codeType} from './files/${codeType}.svg';`;
	// });

	//	console.log(transformedIconFiles);

	// transformedIconFiles.unshift(`import React, { FC } from 'react';`)

	// Add export line.
	// transformedIconFiles.push('interface IWeatherIcons {[key: string]: FC;};');

	// transformedIconFiles.push(`const weatherIcons: IWeatherIcons = {${codeTypes.join(', ')}}`);
	// transformedIconFiles.push(`export default weatherIcons;`);

	// const buildFile = await asyncReadFile(targetFilePath, 'utf8');
	// const updatedBuild = buildFile.replace(injectionTarget, transformedIconFiles.join('\n'));
	// await asyncWriteFile(targetFilePath, updatedBuild);
}
main();
