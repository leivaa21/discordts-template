import bot from '../models/bot';
import 'dotenv/config';
let discordBot: bot;

if (!process.env.bot_token) {
  console.log('bot_token not found!');
}

if (process.env.bot_token) discordBot = new bot(process.env.bot_token);
