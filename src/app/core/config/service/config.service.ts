import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../model/config.model';

const CONFIG_PATH = '/assets/config.json';

@Injectable()
export class ConfigurationService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient) {}

  public async loadAppConfig(configPath: string = CONFIG_PATH): Promise<void> {
    return this.http
      .get(configPath)
      .toPromise()
      .then((data: AppConfig) => {
        this.appConfig = data;
      })
      .catch((reason) => {
        console.error(reason);
      });
  }

  public get(key: string): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig[key];
  }

  public set(key: string, value: string): void {
    this.appConfig[key] = value;
  }
}
