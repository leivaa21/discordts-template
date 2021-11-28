import { ConfigInterface } from './ConfigInterface';

export interface ConfigLoader {
  load(): ConfigInterface;
  updateParam(param: string, value: string): Promise<boolean>;
}
