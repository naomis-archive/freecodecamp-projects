import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './responsive-web-design/product/product.component';
import { SurveyComponent } from './responsive-web-design/survey/survey.component';
import { TributeComponent } from './responsive-web-design/tribute/tribute.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'rwd/tribute', pathMatch: 'full', component: TributeComponent },
  { path: 'rwd/survey', pathMatch: 'full', component: SurveyComponent },
  { path: 'rwd/product', pathMatch: 'full', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
