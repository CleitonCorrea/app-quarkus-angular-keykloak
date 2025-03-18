import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideKeycloak } from 'keycloak-angular';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideKeycloak({
    config: {
      url: 'http://localhost:8188',
      realm: 'app-quarkus-angular-keycloak',
      clientId: 'frontend'
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: './assets/silent-check-sso.html'
    }
  }),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideClientHydration(withEventReplay(),)]
};
