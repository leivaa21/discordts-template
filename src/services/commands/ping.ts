import { Message } from 'discord.js';
import { Bot } from '../../domain/bot';
import {Execute} from '../../domain/interfaces/Command'

export const name:string = 'ping';
export const description:string = 'This is a description';
export const category:string = 'None';
export const execute:Execute = async(bot: Bot, message: Message) => {
    let response = await message.channel.send(`${message.author} pong🏓!`) 
    return response.edit({content:`${message.author} pong🏓! ${(response.createdTimestamp - message.createdTimestamp)/2}ms`});
}
