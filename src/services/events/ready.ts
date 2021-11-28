import { Execute } from "../../domain/interfaces/Event";
import  {consoleLogger as Logger} from "../../domain/loggers/consoleLogger";

export const execute: Execute = async() => {
    const logger = new Logger()
    logger.success(` logged in!`);
}
export const name:string = 'ready'
export const trigger:string = 'ready'
export const description:string = 'notify that bot is logged in'