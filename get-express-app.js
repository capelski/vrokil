const express = require('express');
const {join} = require('path');

module.exports = () => {
	const app = express();
	app.use('/vrokil', express.static(join(__dirname, 'docs')));
	return app;
};
