import {
  Client,
  ClientOptions,
  Collection,
  Intents
} from 'discord.js';
import { Command } from './interfaces/Command';
import { Event } from './interfaces/Event';
import CommandsLoader from './loaders/commandsLoader';
import EventsLoader from './loaders/eventsLoader';
import { Logger } from './loggers/Logger';
import { consoleLogger } from './loggers/consoleLogger';
import { Config } from './config';



const botOptions: ClientOptions = {
  intents: [
    Intents.FLAGS.GUILDS,

    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,

    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,

    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS,

    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'REACTION', 'MESSAGE'],
};

class Bot extends Client{
  /**
   * Intents are what our bot can do, this template list all
   * the intents that discord api has, so remove what you're not using!
   *
   * Look at the discord api to see what can do every intent.
   * @see https://discord.com/developers/docs/topics/gateway#list-of-intents
   */
  

  /**
   * The client of our bot (Using Client class from discord.js)
   */
  public readonly unknown: string = 'Unkown-Bot';
  public readonly token: string;
  public config: Config;

  public readonly logger: Logger = new consoleLogger();

  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();

  private commandLoader : CommandsLoader = new CommandsLoader(__dirname);
  private eventLoader : EventsLoader = new EventsLoader(__dirname);

  /**
   * Public constructor of the bot,
   * - Require a bot token
   * - If options is not specified, bot will have all intents by default
   * @param token
   * @param options
   *
   * @see https://discord.com/developers/docs/intro
   */

  public constructor(token: string, options?: ClientOptions) {
    
    super(options != undefined ? options : botOptions);
    this.token = token;
    this.config = new Config();
  }
  public async start(){
    await this.login(this.token);
    this.load();
  }
  
  private load(){
    this.commandLoader.load(this);
    if(this.commands.size != 0)
      this.logger.success(`Loaded ${this.commands.size} commands!`)
    else
    this.logger.warning(`Loaded ${this.commands.size} commands!`)

    this.eventLoader.load(this);
    if(this.events.size != 0)
    this.logger.success(`Loaded ${this.events.size} events!`)
    else
    this.logger.warning(`Loaded ${this.events.size} events!`)
  }
}
export {Bot};
