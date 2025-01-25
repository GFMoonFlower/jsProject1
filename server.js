
import __dirname from './__dirname.js';
import express from 'express';
const app = express();
app.use(express.static("./"));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/main.html');
});



app.listen(3001, () =>
  console.log('Example app listening on port 3001!!!!'),
);