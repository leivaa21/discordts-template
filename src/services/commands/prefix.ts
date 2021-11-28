import { Message } from 'discord.js';
import { Bot } from '../../domain/bot';
import { Execute } from '../../domain/interfaces/Command';

export const name = 'prefix';
export const description = 'Changes the prefix';
export const category = 'Config';
export const execute: Execute = async (
  bot: Bot,
  message: Message,
  args?: string[]
) => {
  if (!args || !args[0] || args.length > 1) {
    return await message.reply(
      `Correct ussage ${bot.config.prefix}prefix {new_prefix}!`
    );
  }
  bot.updateConfig('prefix', args[0]);
  return await message.reply(`Prefix updated to ${args[0]}`);
};
