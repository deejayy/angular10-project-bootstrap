import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiConnector } from '@deejayy/api-caller';

@Injectable()
export class ApiConnectorService extends ApiConnector {
  public tokenData$: Observable<string>;
  public defaultApiUrl = 'http://localhost';
  public errorHandler = (payload: string | unknown) => {
    console.error('handling... ', payload);
  };

  constructor() {
    super();
    this.tokenData$ = of('token!');
  }
}
