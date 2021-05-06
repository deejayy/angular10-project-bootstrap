import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadTranslations } from '@angular/localize';

import { LanguageList } from '../model/language-definitions';

@Injectable()
export class LocalizerService {
  public selectedLanguage: string = LanguageList.ENGLISH_US;

  constructor(private http: HttpClient) {}

  public async loadMessages(locale: string = LanguageList.ENGLISH_US): Promise<void> {
    this.selectedLanguage = locale;

    return this.http
      .get(`/assets/i18n/messages.${locale}.json`)
      .toPromise()
      .then((data: { [key: string]: string }) => {
        loadTranslations(data);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
}
