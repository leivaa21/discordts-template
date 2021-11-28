import { ConfigInterface } from './ConfigInterface';

export interface ConfigLoader {
  load(): ConfigInterface;
  update(config: ConfigInterface): Promise<boolean>;
}
