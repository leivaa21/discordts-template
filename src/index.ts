import { Bot } from './domain/bot';
import 'dotenv/config';

let discordBot: Bot;

if (!process.env.bot_token) {
  console.log('bot_token not found!');
} else {
  discordBot = new Bot(process.env.bot_token);
  discordBot.start();
}
