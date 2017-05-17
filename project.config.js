const packageSettings = require('./package.json');
const path = require('path');
const exportPath = '\\study.merlion.ru\\C$\\WebSoft\\WebTutorServer\\wt\\web\\react';
// var exportPath = path.join(__dirname, 'dist');

module.exports = {
	htmlFileName: 'pindex.html',
	localPath: path.join(__dirname, 'dist'),
	remotePath: path.join(exportPath, packageSettings.name, 'client')
};