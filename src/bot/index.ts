const start = (() => {
	const botInit = require('./botInit');
	const TelegramBot = require('node-telegram-bot-api');
	const token = botInit.token;
	const bot = new TelegramBot(token, {polling: true});

	bot.onText(/\/echo (.+)/, (msg, match) => {
		const chatId: number = msg.chat.id;
		const resp: any = match[1]; // the captured "whatever"
		bot.sendMessage(chatId, resp);
	});

	bot.on('message', (msg) => {
		const chatId = msg.chat.id;
		bot.sendMessage(chatId, 'Recei');
	});
})
module.exports = {start};
