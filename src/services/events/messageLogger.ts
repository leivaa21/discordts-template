import { Message } from "discord.js";
import { Bot } from "../../domain/bot";
import { Execute } from "../../domain/interfaces/Event";

export const name:string = 'messageLogger'
export const trigger:string = 'messageCreate'
export const description:string = 'Logs on console all the messages the bot receive'

export const execute: Execute = async(bot, message: Message) => {
  console.log(
        `\x1b[33m${message.author.username}\x1b[0m at\x1b[36m #${
          message.channel.type != 'DM' ? `[${message.channel.guild.name}]/${message.channel.name}` : 'DirectMessage'
        } \x1b[0m: ${
          message.content
        } \n\x1b[36m| > \x1b[31m MessageID: \x1b[32m ${message.id}\x1b[0m`
      );
}

