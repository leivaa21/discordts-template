import { Client, ClientOptions, Intents } from 'discord.js';
import messageFormatter from './messageFormatter';

class bot {
  /**
   * Intents are what our bot can do, this template list all
   * the intents that discord api has, so remove what you're not using!
   *
   * Look at the discord api to see what can do every intent.
   * @see https://discord.com/developers/docs/topics/gateway#list-of-intents
   */
  private botOptions: ClientOptions = {
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
  };

  /**
   * The client of our bot (Using Client class from discord.js)
   */
  private client: Client;

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
    this.client = new Client(options != undefined ? options : this.botOptions);
    this.login(token);
  }

  /**
   * Login the bot and send an asynchronous message when bot is logged in
   */
  public login(token: string) {
    if (!token)
      return console.log(
        messageFormatter.okMessage('Unkown-bot', 'token not specified!')
      );

    this.client.login(token);
    this.client.once('ready', () => {
      console.log(
        messageFormatter.okMessage(
          this.client.user ? this.client.user.username : 'Unkown-bot',
          'is logged in.'
        )
      );
    });
  }
}
export default bot;
