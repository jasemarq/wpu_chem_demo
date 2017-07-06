const express = require('express');
const path = require('path');
const app = express();

// Port Number
const port = 8000;

app.get('/', (req, res) => {
  res.render('index');
})

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Start Server
app.listen(port, () => {
	console.log('Server started on port' +port);
});
