import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FeatureFlagService } from '../service/feature-flag.service';

@Injectable()
export class FeatureRouteGuard implements CanActivate {
  constructor(private router: Router, private featureFlagService: FeatureFlagService) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (next && next.data && next.data.featureFlag) {
      if (this.featureFlagService.getFeatureSetting(next.data.featureFlag)) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
