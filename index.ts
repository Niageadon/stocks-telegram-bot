const isLoaded: boolean = false;
const bot = require('./src/bot/index');
bot.start();
console.log(1)
let express = require('express');
let app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world1');
});
app.listen(3000)
