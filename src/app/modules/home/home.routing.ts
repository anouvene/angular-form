import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/modules/home/pages/home.component';
import { CardOverviewComponent } from '@app/modules/home/card-overview/card-overview.component';
import { StepperOverviewComponent } from '@app/modules/home/stepper-overview/stepper-overview.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'card', component: CardOverviewComponent },
  { path: 'stepper', component: StepperOverviewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
