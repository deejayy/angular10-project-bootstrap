import { loadTranslations } from '@angular/localize';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const LOCALE_FILE_PATH = '/assets/i18n/messages.en-US.json';

@Injectable()
export class LocalizerService {
  public constructor(private http: HttpClient) { }

  public async loadMessages(locale: string = LOCALE_FILE_PATH): Promise<void> {
    return this.http
      .get(locale)
      .toPromise()
      .then((data: { [key: string]: string }) => {
        loadTranslations(data);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
}
