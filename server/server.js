const path = require('path'); // dont need to instal
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
	console.log(`Chat app is up on port ${port}`);
});

module.exports = {app};