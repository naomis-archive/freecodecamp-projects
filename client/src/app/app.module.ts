import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { TributeComponent } from './responsive-web-design/tribute/tribute.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './responsive-web-design/survey/survey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './responsive-web-design/product/product.component';

@NgModule({
  declarations: [AppComponent, TributeComponent, HomeComponent, SurveyComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
