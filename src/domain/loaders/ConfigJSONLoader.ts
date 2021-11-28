import { ConfigLoader } from '../interfaces/ConfigLoader';
import fs from 'fs';
import { join } from 'path';
import { ConfigInterface } from '../interfaces/ConfigInterface';
export class ConfigJSONLoader implements ConfigLoader {
  private readonly configPath: string = join(
    __dirname,
    '../../config/config.json'
  );

  public load(): ConfigInterface {
    let config = {} as ConfigInterface;
    const jsonString = fs.readFileSync(this.configPath, 'utf-8');
    config = JSON.parse(jsonString) as ConfigInterface;
    return config;
  }
  public update(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
