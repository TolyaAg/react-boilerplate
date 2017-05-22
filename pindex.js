const fs = require('fs-extra');
const project = require('./project.config');
// const path = require('path');

console.log("pindex.js");
console.log(project.pindexPath);
console.log(project.remotePath);
fs.copy(project.pindexPath, project.remotePath, function (err) {
	if (err){
		console.log(err);
	}
});
