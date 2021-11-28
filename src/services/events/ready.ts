import { Execute } from '../../domain/interfaces/Event';
import { consoleLogger as Logger } from '../../domain/loggers/consoleLogger';

export const execute: Execute = async () => {
  const logger = new Logger();
  logger.success(` logged in!`);
};
export const name = 'ready';
export const trigger = 'ready';
export const description = 'notify that bot is logged in';
