import { Logger } from "./Logger";
import { okMessage, errMessage } from "../format/messageFormatter";

export class consoleLogger implements Logger{
    private readonly successHolder :string= "Bot"
    private readonly errorHolder :string= "ERROR"
    private readonly warningHolder :string = "WARN"
    private readonly infoHolder :string= "INFO"


    success(message:string):void{
        console.log(okMessage(this.successHolder, message));
    }
    warning(message:string):void{
        console.log(okMessage(this.warningHolder, message));
    }
    info(message:string):void{
        console.log(okMessage(this.infoHolder, message));
    }
    error(message:string):void{
        console.log(errMessage(this.errorHolder, message));
    }
}