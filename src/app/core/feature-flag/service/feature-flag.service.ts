import { Injectable } from '@angular/core';
import { ConfigurationService } from '@app/core/config/service/config.service';

@Injectable()
export class FeatureFlagService {
  constructor(private configService: ConfigurationService) {}

  // tslint:disable-next-line: no-any
  public getFeatureSetting(feature: string): any {
    const features = this.configService.get('features');
    if (features && features[feature]) {
      return features[feature];
    }
    return undefined;
  }
}
