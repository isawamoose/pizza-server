const app = require('./server');

const port = 4001;
app.listen(port, '0.0.0.0', function () {
	console.log(`Listening on port ${port}`);
});
