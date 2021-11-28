import { Message } from 'discord.js';
import {Bot} from '../bot'

export interface Execute{
    (bot: Bot, message: Message, args:string[]): Promise<any>
};

export interface Event{
    name: string;
    trigger: string;
    description :string;
    execute: Execute;
}