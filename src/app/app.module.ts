import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiCallerModule } from '@deejayy/api-caller';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    ApiCallerModule,
    StoreDevtoolsModule.instrument({
      name: 'Angular 10 Bootstrap',
      maxAge: 200,
      logOnly: environment.production,
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'hu' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
