const fs = require('fs-extra');
const project = require('./project.config');
const path = require('path');

fs.copy(path.join(project.localPath, project.htmlFileName), path.join(project.remotePath, project.htmlFileName), function (err) {
	if (err){
		console.log(err);
	}
});
