import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { ApiConnector } from '@deejayy/api-caller';
import { environment } from '@env/environment';
import { ConfigModule } from './config/config.module';
import { ConfigurationService } from './config/service/config.service';
import { FeatureFlagModule } from './feature-flag/feature-flag.module';
import { LocalizerModule } from './localizer/localizer.module';
import { LocalizerService } from './localizer/service/localizer.service';
import { ApiConnectorService } from './service/api-connector.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ConfigModule,
    FeatureFlagModule,
    LocalizerModule,
  ],
  providers: [
    { provide: ApiConnector, useClass: ApiConnectorService },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigurationService],
      useFactory: (configurationService: ConfigurationService) => async () => {
        const configFile = environment.configuration;
        try {
          return configurationService.loadAppConfig(`/assets/${configFile}`);
        } catch (err) {
          console.error('Configuration load failed, error:', err);
        }
      },
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [LocalizerService, LOCALE_ID],
      useFactory: (
        localizerService: LocalizerService,
        locale: string,
      ) => async () => {
        const localeFile = `/assets/i18n/messages.${locale}.json`;
        try {
          return localizerService.loadMessages(localeFile);
        } catch (err) {
          console.error('Localization load failed, error:', err);
        }
      },
    },
  ],
})
export class CoreModule {}
