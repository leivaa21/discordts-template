import { Logger } from './Logger';
import { okMessage, errMessage } from '../format/messageFormatter';

export class consoleLogger implements Logger {
  private static readonly successHolder: string = 'Bot';
  private static readonly errorHolder: string = 'ERROR';
  private static readonly warningHolder: string = 'WARN';
  private static readonly infoHolder: string = 'INFO';

  success(message: string): void {
    console.log(okMessage(consoleLogger.successHolder, message));
  }
  warning(message: string): void {
    console.log(okMessage(consoleLogger.warningHolder, message));
  }
  info(message: string): void {
    console.log(okMessage(consoleLogger.infoHolder, message));
  }
  error(message: string): void {
    console.log(errMessage(consoleLogger.errorHolder, message));
  }
}
