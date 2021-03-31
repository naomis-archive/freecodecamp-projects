import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://18d930653a9f42bbbfca49ed16a46f53@o485764.ingest.sentry.io/5700082',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', 'https://fcc-projects.nhcarrigan.com'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
